import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


//Users

const ViewUser = React.lazy(()=> import ('./app/users/ViewUser'))
const AddUser = React.lazy(() => import('./app/users/AddUser'))
const EditUser = React.lazy(() => import('./app/users/EditUser'))
const UserProfile = React.lazy(() => import('./app/users/UserProfile'))


const routes = [
 
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  

  {path: '/users', name: 'View Users', element: ViewUser },
  {path: '/users/add', name :'Add Users', element: AddUser},
  {path: '/users/edit/:id', name :'Edit Users', element: EditUser},
  {path: '/users/profile/:id', name :'Profile', element: UserProfile}
  
]

export default routes
