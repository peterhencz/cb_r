import React, { Component } from 'react';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Input from './components/Input.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
