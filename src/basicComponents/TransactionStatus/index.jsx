import React from 'react';

// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

const TransactionStatus = ({ success }) => {
  if (success) return <SvgIcon color="action"> <CheckCircleIcon /> </SvgIcon>
  return <SvgIcon color="error"> <CancelRoundedIcon /> </SvgIcon>
}

export default TransactionStatus;