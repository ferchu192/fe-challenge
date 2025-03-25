// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

// Components
import { TimeAgo } from '../../basicComponents/Date';
import Hash from '../../basicComponents/Hash';
import { TransferType } from '../../basicComponents/Badge';
import TransactionStatus from '../../basicComponents/TransactionStatus';

const transacctionColumns = [
  {
    name: 'hash',
    label: 'Hash',
    options: {
      customBodyRender: (value) => <Hash hash={value} withOutTooltip />,
    }
  },
  {
    name: 'date',
    label: 'Date',
    options: {
      customBodyRender: (value) => <TimeAgo date={value} />,
    }
  },
  {
    name: 'from',
    label: 'From',
    options: {
      sort: false,
      customBodyRender: (value) => <Hash hash={value} />,
    },
  },
  {
    name: 'to',
    label: 'To',
    options: {
      sort: false,
      customBodyRender: (value) => <Hash hash={value} />,
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
    name: 'type',
    label: 'Type',
    options: {
      customBodyRender: (value) => <TransferType type={value}/>,
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
  {
    name: 'status',
    label: 'Status',
    options: {
      sort: false,
      customBodyRender: (value) => <TransactionStatus status={value} />,
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