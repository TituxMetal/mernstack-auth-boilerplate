import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => (
  <>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/login'>Login</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/register'>Register</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/dashboard'>Dashboard</NavLink>
    </li>
    <li>
      <NavLink className='grey-text text-lighten-4' to='/logout'>Logout</NavLink>
    </li>
  </>
)

export default Navlinks
