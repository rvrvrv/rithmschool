import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick = () => (
    this.setState({ clicks: this.state.clicks + 1 })
  );

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.handleClick}
          />
          <h2>Welcome to React, {this.props.name}!</h2>
          <p className="click-counter">{this.state.clicks > 0 && `${this.state.clicks} clicks`}</p>
        </div>
        <div className="App-body">
        </div>
      </div>
    );
  }
}

App.propTypes = { name: PropTypes.string.isRequired };
