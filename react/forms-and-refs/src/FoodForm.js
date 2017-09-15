import React from 'react';

export default class FoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      quantity: '1',
      ordered: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      ordered: true
    });
  }

  handleRestart() {
    this.setState({ ordered: false });
  }

  render() {
    let orderForm = (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Food
            <input
              onChange={this.handleChange}
              placeholder="What food would you like?"
              name="food"
              value={this.state.food}
            />
          </label>
        </div>
        <div>
          <label>
            Quantity
            <select
              value={this.state.quantity}
              onChange={this.handleChange}
              name="quantity"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Place your order" />
      </form>
    );

    let orderReceived = (
      <div>
        <h3>Order received!</h3>
        <p>Food: {this.state.food}</p>
        <p>Quantity: {this.state.quantity}</p>
        <p>Coming right up!</p>
        <button onClick={this.handleRestart}>Start over</button>
      </div>
    );

    let visibleElement = this.state.ordered ? orderReceived : orderForm;

    return (
      <div>
        <h2>Food Form</h2>
        <h4>What would you like to eat?</h4>
        {visibleElement}
      </div>
    );
  }
}
