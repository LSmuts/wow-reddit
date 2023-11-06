// For the Searchbar at the top of the page

import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." />
      {/* Add any search button or functionality here */}
    </div>
  );
}


export default SearchBar;