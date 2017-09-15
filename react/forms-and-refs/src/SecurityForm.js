import React from 'react';

export default class SecurityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
      error: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.pin === '1234') {
      alert('Thanks for the pin!');
      this.setState({ pin: '' });
    } else {
      this.setState({ pin: '', error: true });
      this.input.focus();
    }
  }

  handleChange(e) {
    this.setState({ pin: e.target.value, error: false });
  }

  render() {
    return (
      <div>
        <h2>Security Form</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Enter your pin:</label>
          <input
            type="text"
            value={this.state.pin}
            onChange={this.handleChange.bind(this)}
            ref={el => (this.input = el)}
          />
          <button type="submit">Enter</button>
          {this.state.error && <p>Wrong. Please Try again.</p>}
        </form>
      </div>
    );
  }
}
