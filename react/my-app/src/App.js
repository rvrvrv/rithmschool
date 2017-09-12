import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InstructorList from './InstructorList';
import PeopleList from './PeopleList';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, view: 'Instructor List' };
  }

  handleClick = () => {
    this.setState(prevState => (
      { clicks: prevState.clicks + 1 }
    ));
  };

  handleToggleView = () => {
    this.setState((prevState) => {
      // Toggle between views
      const newView = (prevState.view === 'Instructor List')
        ? 'People List'
        : 'Instructor List';
      return { view: newView };
    });
  };

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
          <button onClick={this.handleToggleView}>Switch Lists</button>
          { this.state.view === 'Instructor List'
            ? <InstructorList />
            : <PeopleList />
          }
        </div>
      </div>
    );
  }
}

App.propTypes = { name: PropTypes.string.isRequired };
