import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { postColor } from '../../actions';
import './Header.css';

class Header extends Component {
  state = {
    color: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleColorClick = color => {
    this.props.postColor(this.state.color);
  };

  render() {
    return (
      <div className="header">
        <Input name="color" placeholder="hex code" onChange={this.handleInputChange} />
        <Button onClick={this.handleColorClick}>></Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  postColor,
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
