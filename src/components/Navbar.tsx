import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
    <nav className='navbar sticky top-0 w-full'>
      <div>Fábio</div>


      <div>
          <ul className='nav-links'>
            <li><NavLink className='logo' to="/"> Home /&gt; </NavLink></li>
            <li><NavLink to="/projects"> Projects /&gt; </NavLink></li>
            <li><NavLink to="/experiences"> Experience /&gt; </NavLink></li>
            <li><NavLink to="/my-resume"> Resume /&gt; </NavLink></li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar