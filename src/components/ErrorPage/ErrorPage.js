import React from 'react';
import './ErrorPage.css';

// Functional component for displaying an error message
const ErrorPage = ({ message }) => {
  return (
    // Container for the error page with a specific class for styling
    <div className="error-container">
      {/* Heading for the error message */}
      <h2>Oops! Something went wrong.</h2>
      {/* Display the error message passed as a prop */}
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;