import React from 'react';
import '../styles/Input.css';

const Input = props => (
  <div className="input">
    <input className="input.style" {...props} />
  </div>
);

export default Input;
