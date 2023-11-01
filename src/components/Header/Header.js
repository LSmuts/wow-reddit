// For the top search bar and logo

import React from 'react';

function Header() {
  return (
    <header>
      {/* Search bar */}
      <input type="text" placeholder="Search..." />
      {/* Logo */}
      <img src="your-logo.png" alt="Your Logo" />
      {/* Navigation buttons */}
      <button>Home</button>
      <button>Hot</button>
      <button>New</button>
      <button>Top</button>
    </header>
  );
}

export default Header;