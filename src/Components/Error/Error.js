import React from 'react';
import './Error.css';

const Error = ({ location, errorMessage }) => {
  const displayMessage = errorMessage
    ? errorMessage : `The URL path ${location.pathname} you used was incorrect. Please try again.`;

  return (
    <div className="error-container">
      <div className="error-message-container">
        <p className="error-message">{displayMessage}</p>
      </div>
    </div>
  );
};

export default Error;