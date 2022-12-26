import React from 'react';
import '../style/navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {

  return (
    <div className='navbar'>
      <ul className='nav-pages'>
        <li ><NavLink to='/' >Home</NavLink></li>
        <li ><NavLink to='/allcountries' >All Contries</NavLink></li>
        <li ><NavLink to='/records' >My Records</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
