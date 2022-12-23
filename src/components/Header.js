import React from 'react';
import Navbar from './Navbar';
import HeaderBackground from './HeaderBackground';
import '../style/header.css';

function Header() {
  return (
    <div className='header'>
        <HeaderBackground />
        <Navbar />
    </div>
  )
}

export default Header
