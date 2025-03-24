import React from 'react';

// Components
import { Badge } from '@material-ui/core';

export const BadgeComponent = ({ label, color }) => {
  return (
    <Badge
      color={color}
      variant="primary"
      overlap="circular"
    >
      {label}
    </Badge>
  )
};
