import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <Input placeholder="email" />
        <Input placeholder="pass" />
        <Button>></Button>
      </div>
    );
  }
}

export default Login;
