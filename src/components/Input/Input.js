import React from 'react';

import './Input.css';

const Input = props => (
  <div className="input-form">
    <input className="input.style" {...props} />
  </div>
);

export default Input;
