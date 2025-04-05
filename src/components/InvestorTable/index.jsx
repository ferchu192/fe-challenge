import React, { useState } from 'react';

// BasicComponents
import SelectQuery from '../../basicComponents/Selects/Query';

import Table from './Table'

// Validations
import { chainIDRules, addressRules } from '../../validations/rules';

// Columns
import { getColumns } from './columns';

// StyledComponents
import {
  InvestorTableContainer,
  TableCard,
} from './stylecomponents';
import FilterCard from '../FilterCard';

const DEFAULT_QUERY = {
  id: 'transactionAddress',
  label: 'Transactions'
};

const DEFAULT_QUERY_PARAMS = {
  chainID: 1,
  address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  pageNumber: 1,
  pageSize: 10,
};

const InvestorTable = () => {
  const [queryType, setQueryType] = useState(DEFAULT_QUERY);
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);
  const [makeQuery, setMakeQuery] = useState(false);
  const [updateDate, setUpdateDate] = useState();

  const disabledButton = !chainIDRules(queryParams.chainID).validation || !addressRules(queryParams.address).validation;;

  /*
    -------------------- TABLEFUNCTIONS --------------------
  */
  const customParser = (json) => {
    return json.data.items.map((item) => {
      return {
        ...item,
        from: {
          label: item.from_address_label,
          hex: item.from_address,
        },
        to: {
          label: item.to_address_label,
          hex: item.to_address,
        },
      }
    })
  };

  const fetchCallback = (json) => setUpdateDate(json.data.updated_at);

  /*
    -------------------- RENDER --------------------
  */
  return (
    <InvestorTableContainer id='investor-table-container'>

      {/* QUERY */}
      <FilterCard id="investor-table-filter-card" />
      
      {/* TABLE */}
      <TableCard id="investor-table-container">
        <Table
          title={queryType.label}
          columns={getColumns(queryType.id)}
        />
      </TableCard>
    </InvestorTableContainer>
  )
};

export default InvestorTable;
