// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

// Schemas
import Bitcoin from '../../schemas/bitcoin.js';

// Components
import { TimeAgo } from '../../basicComponents/Date';
import Hash from '../../basicComponents/Hash';
import { TransferType } from '../../basicComponents/Badge';
import TransactionStatus from '../../basicComponents/TransactionStatus';
import CryptoNumber from '../../basicComponents/CryptoNumber';
import Ethereum from '../../schemas/etherium.js';
import USD from '../../schemas/usd.js';

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
    options: {
      customBodyRender: (value) => {
        const eth =  new Ethereum();
        return <CryptoNumber value={value} {...eth.getInfo()} />;
      },
    }
  },
  {
    name: 'valueUSD',
    label: 'Value USD',
    options: {
      customBodyRender: (value) => {
        const usd =  new USD();
        return <CryptoNumber value={value} {...usd.getInfo()} />;
      }
    }
  },
  {
    name: 'priceUSD',
    label: 'Price USD',
    options: {
      customBodyRender: (value) => {
        const usd = new USD();
        return <CryptoNumber value={value} {...usd.getInfo()} />;
      }
    }
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
      options: {
        customBodyRender: (value) => {
          const usd = new USD();
          return <CryptoNumber value={value} {...usd.getInfo()} />;
        }
      }
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