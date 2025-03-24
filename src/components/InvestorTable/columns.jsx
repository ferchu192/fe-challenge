// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SvgIcon from '@material-ui/core/SvgIcon';

// Components
import { TimeAgo } from '../../basicComponents/Date';
import Hash from '../../basicComponents/Hash';
import { BadgeComponent } from '../../basicComponents/Badge';

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
    name: 'type',
    label: 'Type',
    options: {
      customBodyRender: (value) => <BadgeComponent label={value} />,
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