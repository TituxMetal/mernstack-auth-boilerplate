import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = ({ handleLogout }) => (
  <>
    <li>
      <NavLink to='/dashboard'>Dashboard</NavLink>
    </li>
    <li>
      <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
    </li>
  </>
)

export default SignedInLinks
