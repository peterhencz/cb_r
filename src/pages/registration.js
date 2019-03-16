import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class Registration extends Component {
  render() {
    return (
      <div>
        <div className="input-form">
          <Input placeholder="email" />
          <Input placeholder="nick" />
          <Input placeholder="pass" />
          <Input placeholder="confirm pass" />
          <Button>></Button>
        </div>
        <div>
          <NavLink to="/login">
            <h3>log in</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Registration;
