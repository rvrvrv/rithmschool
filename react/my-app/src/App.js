import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="click-counter">{this.state.clicks > 0 && `${this.state.clicks} clicks`}</p>
      </div>
    );
  }
}

export default App;
