import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class Registration extends Component {
  render() {
    return (
      <div className="App">
        <Input placeholder="email" />
        <Input placeholder="nick" />
        <Input placeholder="pass" />
        <Input placeholder="confirm pass" />
        <Button>></Button>
      </div>
    );
  }
}

export default Registration;
