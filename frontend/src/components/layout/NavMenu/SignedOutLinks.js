import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => (
  <>
    <li>
      <NavLink to='/login'>Login</NavLink>
    </li>
    <li>
      <NavLink to='/register'>Register</NavLink>
    </li>
  </>
)

export default SignedOutLinks
