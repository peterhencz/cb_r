import React from 'react';
import './Button.css';

const Button = props => (
  <div className="button">
    <button {...props} />
  </div>
);

export default Button;
