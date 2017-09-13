import React from 'react';

const Instructor = props =>
  (<div>
    <h2>
      This instructor&apos;s name is {props.name}.
      <button onClick={props.removeInstructor}>X</button>
    </h2>
  </div>);

export default Instructor;
