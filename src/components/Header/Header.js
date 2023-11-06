import React from 'react';
import './Header.css';
import logo from '../../images/NavbarLogo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Your Logo" />
      <div className="buttons-container">
        {/* Navigation buttons */}
        <button>Home</button>
        <button>Hot</button>
        <button>New</button>
        <button>Top</button>
      </div>
    </header>
  );
}

export default Header;