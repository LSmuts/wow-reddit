// For displaying error messages

import React from 'react';
import './ErrorPage.css';

function ErrorPage({ error }) {
  return (
    <div>
      <h2>Error Occurred</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;