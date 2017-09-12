import React from 'react';
import InstructorItem from './InstructorItem';

const InstructorList = (props) => {
  // Generate InstructorItem from each in props
  const instList = props.instructors.map(instructor => (
    <InstructorItem
      key={instructor.id}
      name={instructor.name}
      avatar={instructor.avatar}
      hobby={instructor.hobby}
    />
  ));

    // Output formatted list as JSX
  return (
    <div>
      <h1>Instructors</h1>
      <div className="instructor-list">
        {instList}
      </div>
    </div>
  );
};

InstructorList.defaultProps = {
  instructors: [
    {
      id: 0,
      name: 'Tim',
      avatar: 'https://www.rithmschool.com/content/react_fundamentals/tim.jpg',
      hobby: 'Sailing',
    },
    {
      id: 1,
      name: 'Matt',
      avatar: 'https://www.rithmschool.com/content/react_fundamentals/matt.jpg',
      hobby: 'Math',
    },
    {
      id: 2,
      name: 'Elie',
      avatar: 'https://www.rithmschool.com/content/react_fundamentals/elie.jpg',
      hobby: 'Violin',
    },
    {
      id: 3,
      name: 'Whiskey',
      avatar: 'https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg',
      hobby: 'Napping',
    },
  ],
};

export default InstructorList;
