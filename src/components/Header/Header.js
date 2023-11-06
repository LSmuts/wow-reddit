import React from 'react';
import './Header.css';
import logo from '../../images/NavbarLogo.png';

function Header() {
  return (
    <header>
      {/* Logo */}
      <img src={logo} alt="Your Logo" />
      {/* Navigation buttons */}
      <button>Home</button>
      <button>Hot</button>
      <button>New</button>
      <button>Top</button>
    </header>
  );
}

export default Header;