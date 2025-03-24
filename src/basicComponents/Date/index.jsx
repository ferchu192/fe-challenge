import React from 'react';

// Moment
import Moment from 'react-moment';
import moment from 'moment';

// Tooltip
import Tooltip from '../Tooltip';

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

export const TimeAgo = ({ date }) => {
  return (
    <Tooltip title={moment(date).format('DD MMM HH:mm:ss')} >
      <Moment fromNow>
        {date}
      </Moment>
    </Tooltip>
  );
};

export default DateComponent;

