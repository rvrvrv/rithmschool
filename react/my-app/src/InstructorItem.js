import React from 'react';
import PropTypes from 'prop-types';

const InstructorItem = props => (
  <div>
    <h2>{props.name}</h2>
    <img src={props.avatar} alt={props.name} />
    <p><strong>Hobby:</strong> {props.hobby}</p>
  </div>
);

InstructorItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
};

export default InstructorItem;
