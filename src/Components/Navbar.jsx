import React from 'react';
import '../Style/Header.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import logo from '/TractariLogo.png';

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle('responsive-nav');
  }

  function closeNavbar() {
    navRef.current.classList.remove('responsive-nav');
  }
  return (
    <>
      <header>
        <img className='logo' src={logo} alt='logo-tractari' />
        <nav ref={navRef}>
          <a href='#home' onClick={closeNavbar}>
            Home
          </a>
          <a href='#desprenoi' onClick={closeNavbar}>
            Despre noi
          </a>
          <a href='#contact' onClick={closeNavbar}>
            Contact
          </a>
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
