import React from 'react'
import CIcon from '@coreui/icons-react'
import {

  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },

  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Users',
        to: '/users',
      },
      {
        component: CNavItem,
        name: 'Add Users',
        to: '/users/add',
      }
    ]
  },

 
]

export default _nav
