import React from 'react';
import '../Style/Header.scss'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import logo from '../assets/logo.png'

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle('responsive-nav');
  }
  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo tractari'/>
        <nav ref={navRef}>
          <a href='/#'>Despre noi</a>
          <a href='/#'>Servicii</a>
          <a href='/#'>Contact</a>
          {/* <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link> */}
          <button className='nav-btn nav-btn-close' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
