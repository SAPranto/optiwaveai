import React from "react";

const Button = ({ buttonText }) => (
  <button href="#" className="primary-button">
    <div className="button-text-wrapper">
      <div className="default-text">{buttonText}</div>
      <div className="hover-text">{buttonText}</div>
    </div>
  </button>
);

export default Button;
