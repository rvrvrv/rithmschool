import React, { Component } from 'react';

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'Tim' },
        { name: 'Janey' },
        { name: 'Kira' },
        { name: 'Angelina' },
      ],
    };
  }

  // Call addName after 2 seconds
  componentDidMount() {
    this.delayedAdd = setTimeout(() => this.addName(), 2000);
  }

  // Prevent addName from being called after component unmounts
  componentWillUnmount = () => clearTimeout(this.delayedAdd);

  // Add a name to the list of people
  addName() {
    const newPeople = this.state.people.slice();
    newPeople.push({ name: 'Whiskey' });
    this.setState({ people: newPeople });
  }

  render() {
    const pplList = this.state.people.map(p => <p key={p.name}>{p.name}</p>);

    return (
      <div>
        {pplList}
      </div>
    );
  }
}

