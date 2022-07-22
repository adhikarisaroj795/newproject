import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useParams } from 'react-router-dom'
import { addFile, editUser, getUser } from '../rest-api/User-RestAPI'

const Userprofile = () => {
    let { id } = useParams()

    const [user, setUser] = useState({})
    const [fileFromDb, setFileFromDb] = useState()
    const [selectedFile, setSelectedFile] = useState()
  


    const loadUser = (id) => {
        getUser(id)
          .then((res) => res.data)
          .then((rows) => {
            setUser(rows)
            setFileFromDb(rows['files'][0]['fileUrl'])
            console.log(fileFromDb)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
      }
    
      const handleSubmit = () => {
       const formData = new FormData();
       formData.append("file", selectedFile);
       addFile(formData).then(data => {
        const file = data.data
        user['files'] = [file];
        editUser(user).then(data =>{
          window.location.reload(false)
        }).catch(err => {
          
        })
       }).catch(err => {
        console.log("Error when uploading file")
        console.log(err)
       })
      }

      useEffect(() => {
        loadUser(id)
      }, [])

 return (
    <div>
      <CForm>
        <div div className="mb-3">
          <CFormLabel>Name</CFormLabel>
          <CFormInput
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Martin"
            disabled
          />
        </div>
        <div className="mb-3">
          <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            placeholder="Kathmandu"
            name="address"
            value={user.address}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="number"
            placeholder="Kathmandu"
            name="age"
            value={user.age}
            onChange={handleChange}
            disabled
          />
        </div>
      </CForm>
      <CFormLabel>File</CFormLabel>
      <CFormInput type="file" id="formFile" onChange ={handleChange} />
      <CButton onClick={handleSubmit} color ="primary">
        Upload
      </CButton>

   </div>
  )
}

export default Userprofile