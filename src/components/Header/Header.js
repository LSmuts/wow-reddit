import React from 'react';
import './Header.css';
import logo from '../../images/NavbarLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faSquarePlus, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Header component with navigation buttons and sorting options
function Header({ onSortChange }) {
  // Event handler for sorting button click
  const handleSortClick = (sortType) => {
    // Call the onSortChange prop with the selected sorting type
    onSortChange(sortType);
  };

  // JSX structure for the Header component
  return (
    <header>
      {/* Logo */}
      <img src={logo} alt="Your Logo" />
      {/* Container for navigation buttons */}
      <div className="buttons-container">
        {/* Home button */}
        <button className="sorter" data-tooltip="Home" onClick={() => handleSortClick('home')}><FontAwesomeIcon icon={faHouse} /></button>
        {/* Hot button */}
        <button className="sorter" data-tooltip="Hot" onClick={() => handleSortClick('hot')}><FontAwesomeIcon icon={faFire} /></button>
        {/* Newest button */}
        <button className="sorter" data-tooltip="Newest" onClick={() => handleSortClick('newest')}><FontAwesomeIcon icon={faSquarePlus} /></button>
        {/* Best button */}
        <button className="sorter" data-tooltip="Best" onClick={() => handleSortClick('best')}><FontAwesomeIcon icon={faTrophy} /></button>
      </div>
    </header>
  );
}

export default Header;