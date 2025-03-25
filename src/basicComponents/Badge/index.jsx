import React from 'react';

// Components
import style from 'styled-components';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';

const Type = style(Chip)`
  border-radius: 0.5rem !important;
  padding: 0.25rem 0.2rem !important;
  height: auto !important;
  font-size: 0.7rem !important;
  text-transform: uppercase;
  font-weight: 600 !important;
  letter-spacing: 0.05rem;
`;

const BadgeComponent = ({ label, color }) => {
  return (
    <Type
      color={color}
      label={label}
    />
  )
};

export const TransferType = ({ type }) => {
  switch (type) {
    case 1:
      return <BadgeComponent color="primary" label='Transfer'/>
    case 2:
      return <BadgeComponent color="secondary" label='Register' />
    case 3:
      return <BadgeComponent color="primary" label='Transfer' />
    default:
      return <BadgeComponent color="primary" label='Transfer' />
  }
};