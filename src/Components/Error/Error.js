import React from 'react';
import './Error.css';
import PropTypes from 'prop-types'

const Error = ({ location, errorMessage }) => {
  console.log(location)
  console.log('error', errorMessage)
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


Error.propTypes = {
  location: PropTypes.object,
  errorMessage: PropTypes.string
  
}