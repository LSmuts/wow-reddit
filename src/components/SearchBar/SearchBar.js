import React, { useState } from 'react';
import './SearchBar.css';

// Functional component for displaying a search bar
function SearchBar({ onSearch }) {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    // Call the onSearch prop with the updated search query
    if (onSearch) {
      onSearch(newSearchQuery);
    }
  };

  return (
    // Container for the search bar with a specific class for styling
    <div className="search-bar-container">
      {/* Input element for the search bar with a specific id, placeholder text, and onChange event */}
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {/* Add any search button or functionality here */}
    </div>
  );
}

export default SearchBar;