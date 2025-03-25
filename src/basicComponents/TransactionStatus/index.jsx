import React from 'react';

// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

const TransactionStatus = ({ status }) => {
  const {
    success,
    error,
    faultError,
  } = status;

  if (success) return <SvgIcon color="action"> <CheckCircleIcon /> </SvgIcon>
  if (error) return <SvgIcon color="error"> <CancelRoundedIcon /> </SvgIcon>
  if (faultError) return <SvgIcon color="error"> <CancelRoundedIcon /> </SvgIcon>
}

export default TransactionStatus;