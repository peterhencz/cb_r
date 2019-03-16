import React from 'react';
import './Button.css';

const Button = props => (
  <div className={props.buttonClass}>
    <button {...props} />
  </div>
);

export default Button;
