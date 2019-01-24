import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => (
  <>
    <li>
      <NavLink to='/login'>Login</NavLink>
    </li>
    <li>
      <NavLink to='/register'>Register</NavLink>
    </li>
    <li>
      <NavLink to='/dashboard'>Dashboard</NavLink>
    </li>
    <li>
      <NavLink to='/logout'>Logout</NavLink>
    </li>
  </>
)

export default Navlinks
