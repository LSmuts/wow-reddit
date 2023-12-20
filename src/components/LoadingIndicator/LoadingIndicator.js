import React from 'react';
import './LoadingIndicator.css';

// Functional component for displaying a loading indicator
const LoadingIndicator = () => {
  return (
    // Container for the loading indicator with a specific class for styling
    <div className="loading-container">
      {/* Loading spinner element */}
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingIndicator;