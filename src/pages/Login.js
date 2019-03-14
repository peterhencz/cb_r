import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="input-form ">
          <Input placeholder="email" />
          <Input placeholder="pass" />
          <NavLink to="/my_board">
            <Button>></Button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/registration">
            <h3>sign up</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
