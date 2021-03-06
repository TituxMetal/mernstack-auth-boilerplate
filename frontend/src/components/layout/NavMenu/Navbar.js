import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { withContext } from '../../../context'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavMenu = styled.nav`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.textColor};
  @media screen and (max-width: 640px) {
    .brand-logo {
      font-size: 1.5rem;
    }
  }
`

const Navbar = ({ isAuthenticated, logoutHandler }) => {
  const navlinks = isAuthenticated ? <SignedInLinks handleLogout={logoutHandler} /> : <SignedOutLinks />
  return (
    <>
      <NavMenu className='nav-wrapper z-depth-0'>
        <div className="container">
          <a href="/" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <Link to='/' className='brand-logo'>
            Mern Auth
          </Link>
          <ul className="right hide-on-med-and-down">
            {navlinks}
          </ul>
        </div>
      </NavMenu>
      <ul className="sidenav" id="mobile">
        {navlinks}
      </ul>
    </>
  )
}

export default withContext(Navbar)
