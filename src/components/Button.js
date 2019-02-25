import React from 'react';
import '../styles/Button.css';

const Button = props => (
  <div className="button">
    <button {...props} />
  </div>
);

export default Button;
