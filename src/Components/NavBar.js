import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  return (
    <div className='navbar'>
      <p className='portfolio_title'>Portfolio.</p>
      <FontAwesomeIcon className='nav_options' icon="fa-solid fa-bars" />
      <div className='nav_items'>
        <Link className="nav_item" to="/">Home</Link>
        <Link className="nav_item" to="/about">About</Link>
        <Link className="nav_item" to="/projects">Projects</Link>
        <Link className="nav_item" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default NavBar
