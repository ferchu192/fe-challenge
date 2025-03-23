// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

// Moment
import Moment from 'react-moment';
import 'moment-timezone';

const transacctionColumns = [
  {
    name: 'hash',
    label: 'Hash',
  },
  {
    name: 'time',
    label: 'Date',
    options: {
      customBodyRender: (value) => {
        return (
          <Moment format="DD MMM HH:mm:ss">
            {value}
          </Moment>
        )
      }
    }
  },
  {
    name: 'from',
    label: 'From',
    options: {
      sort: false,
      customBodyRender: (value) => {
        const {
          label,
          hex,
        } = value;

        return <>{label || hex}</>
      },
    },
  },
  {
    name: 'to',
    label: 'To',
    options: {
      sort: false,
      customBodyRender: (value) => {
        const {
          label,
          hex,
        } = value;

        return <>{label || hex}</>
      },
    }
  },
  {
    name: 'gas',
    label: 'Gas',
    options: {
      display: false,
    }
  },
  {
    name: 'success',
    label: 'Successful',
    options: {
      sort: false,
      customBodyRender: (value) => {
        if (value) return <SvgIcon color="action"> <CheckCircleIcon /> </SvgIcon>
        else return <SvgIcon color="error"> <CancelRoundedIcon /> </SvgIcon>
      },
    }
  },
  {
    name: 'value',
    label: 'Value',
  },
  {
    name: 'valueUSD',
    label: 'Value USD',
  },
  {
    name: 'priceUSD',
    label: 'Price USD',
  },
  {
    name: 'cost',
    label: 'Cost',
    options: {
      display: false,
    }
  },
  {
    name: 'costUSD',
    label: 'Cost USD',
    options: {
      display: false,
    }
  },
];

export const getColumns = (queryType) => {
  switch (queryType) {
    case 'transactionAddress':
      return transacctionColumns;

    default:
      return transacctionColumns;
  }
}