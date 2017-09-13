import React, { Component } from 'react';
import Instructor from './Instructor';

export default class InstructorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        'Elie',
        'Matt',
        'Tim',
      ],
    };
  }

  handleRemove(idx) {
    // Destructure instructors array
    const { instructors } = this.state;
    // Remove instructor based on idx (index)
    const newInstructors = instructors.slice(0, idx).concat(instructors.slice(idx + 1));
    // After instructor removal, update state
    this.setState({ instructors: newInstructors });
  }

  render() {
    const instructors = this.state.instructors.map((name, idx) => (
      <Instructor
        removeInstructor={this.handleRemove.bind(this,idx)}
        name={name}
        key={idx}
      />
    ));
    return (
      <div>{instructors}</div>
    );
  }
}
