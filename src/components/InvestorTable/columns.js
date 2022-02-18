// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

// Moment
import Moment from 'react-moment';
import 'moment-timezone';

const transacctionColumns = [
  {
    name: 'block_height',
    label: 'Block height',
  },
  {
    name: 'block_signed_at',
    label: 'Block Signed',
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
    name: 'gas_offered',
    label: 'Gas Offered',
    options: {
      display: false,
    }
  },
  {
    name: 'gas_price',
    label: 'Gas Price',
    options: {
      display: false,
    }
  },
  {
    name: 'gas_spent',
    label: 'Gas Spent',
  },
  {
    name: 'successful',
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
    name: 'value_quote',
    label: 'Value Quote',
  },
  {
    name: 'tx_offset',
    label: 'Tx Offset',
    options: {
      display: false,
    }
  },
  {
    name: 'tx_hash',
    label: 'Tx Hash',
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