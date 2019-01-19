import React from 'react'
import { Link } from 'react-router-dom'

import { Navlinks } from './';

const Navbar = () => {
  return (
    <>
      <nav className='nav-wrapper purple darken-2 z-depth-0'>
        <div className="container">
          <a href="/" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <Link to='/' className='brand-logo'>
            Mern Auth Boilerplate
          </Link>
          <ul className="right hide-on-med-and-down">
            <Navlinks />
          </ul>
        </div>
      </nav>
      <ul className="sidenav grey darken-3" id="mobile">
        <Navlinks />
      </ul>
    </>
  )
}

export default Navbar
