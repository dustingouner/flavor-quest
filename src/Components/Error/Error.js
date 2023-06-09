import React from "react";
import './Error.css'


const Error = ({errorMessage}) => {
  return (
    <div className="error-container">
      <div className="error-message-container">
        <p className="error-message">{errorMessage}</p>
      </div>
    </div>
  )
}



export default Error