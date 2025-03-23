import React from 'react';

// Moment
import Moment from 'react-moment';
import 'moment-timezone';

const DateComponent = ({ label, date }) => {
  return (
    <>
      <span>{label}: </span>
      <Moment format="DD MMM HH:mm:ss">
        {date}
      </Moment>
    </>
  );
};

export default DateComponent;

