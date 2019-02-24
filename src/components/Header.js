import React, { Component } from 'react';
import Input from '../components/Input.js';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  getColor = color => {
    this.setState({
      color,
    });
  };

  render() {
    return (
      <div className="header">
        <Input placeholder="hex code" onChange={color => this.getColor(color.target.value)} />
        {console.log('cica: ', this.state)}
        <Button onClick={this.props.postColor} />
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
