import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let greeting =
      this.state.firstName && this.state.lastName
        ? `Hello, ${this.state.firstName} ${this.state.lastName}!`
        : 'Please enter your full name.';

    return (
      <div>
        <h2>Name Form</h2>
        <input
          onChange={this.handleChange}
          placeholder="What's your first name?"
          name="firstName"
          value={this.state.firstName}
        />
        <input
          onChange={this.handleChange}
          placeholder="What's your last name?"
          name="lastName"
          value={this.state.lastName}
        />
        <h3>{greeting}</h3>
      </div>
    );
  }
}
