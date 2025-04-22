// Components
import { TimeAgo } from '../../basicComponents/Date';
import Hash from '../../basicComponents/Hash';
import { TransferType } from '../../basicComponents/Badge';
import TransactionStatus from '../../basicComponents/TransactionStatus';
import CryptoNumber from '../../basicComponents/CryptoNumber';

const transacctionColumns = [
  {
    name: 'hash',
    label: 'Hash',
    options: {
      customBodyRender: (value) => <Hash hash={value.hash} link={value.link} />,
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
      customBodyRender: (value) => <Hash hash={value.hash} link={value.link} />,
    },
  },
  {
    name: 'to',
    label: 'To',
    options: {
      sort: false,
      customBodyRender: (value) => <Hash hash={value.hash} link={value.link} />,
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
      customBodyRender: (v) => {
        const { value, chain } = v;
        return <CryptoNumber value={value} {...chain} />;
      },
    }
  },
  {
    name: 'valueUSD',
    label: 'Value USD',
    options: {
      customBodyRender: (v) => {
        const { value, chain } = v;
        return <CryptoNumber value={value} {...chain} />;
      },
    }
  },
  {
    name: 'priceUSD',
    label: 'Price USD',
    options: {
      customBodyRender: (v) => {
        const { value, chain } = v;
        return <CryptoNumber value={value} {...chain} />;
      },
    }
  },
  {
    name: 'cost',
    label: 'Cost',
    options: {
      display: false,
      customBodyRender: (v) => {
        const { value, chain } = v;
        return <CryptoNumber value={value} {...chain} />;
      },
    }
  },
  {
    name: 'costUSD',
    label: 'Cost USD',
    options: {
      display: false,
      customBodyRender: (v) => {
        const { value, chain } = v;
        return <CryptoNumber value={value} {...chain} />;
      },
    }
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      sort: false,
      customBodyRender: (value) => <TransactionStatus success={value} />,
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