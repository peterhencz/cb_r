import React from 'react';

import './Input.css';

const Input = props => (
  <div className={props.inputStyle}>
    <input className="input.style" {...props} />
  </div>
);

export default Input;
