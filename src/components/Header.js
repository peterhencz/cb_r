import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../components/Input.js';
import Button from '../components/Button';
import * as actions from '../actions';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  getColor = color => {
    this.setState({ color: color });
  };

  getColorClick = color => {
    console.log('getColorClick');
    console.log(this.state.color);
    this.props.postColor(this.state.color);
  };

  render() {
    return (
      <div className="header">
        <Input placeholder="hex code" onChange={color => this.getColor(color.target.value)} />
        {console.log('cica: ', this.state)}
        <Button onClick={this.getColorClick} />
        {this.state.color}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { postColor } = actions;
  return bindActionCreators(
    {
      postColor,
    },
    dispatch
  );
};
export default connect(
  null,
  { mapDispatchToProps }
)(Header);
