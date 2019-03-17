import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import './index.css';

class Login extends Component {
  render() {
    return (
      <div className="form">
        <div>
          <Input placeholder="email" />
          <Input placeholder="pass" />
          <NavLink to="/my_board">
            <Button>></Button>
          </NavLink>
          <NavLink to="/registration">
            <h3>sign up</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
