import React from 'react';

import Table from './Table'

// Columns
import { getColumns } from './columns';

// StyledComponents
import {
  InvestorTableContainer,
  TableCard,
} from './stylecomponents';
import FilterCard from '../FilterCard';

import TradingViewWidget from '../Widgets/TradingView';

const DEFAULT_QUERY = {
  id: 'transactionAddress',
  label: 'Transactions'
};

const InvestorTable = () => {
  /*
    -------------------- RENDER --------------------
  */
  return (
    <InvestorTableContainer id='investor-table-container'>

      {/* QUERY */}
      <FilterCard id="investor-table-filter-card" />

      <TableCard id="investor-table-container">
        {/* WIDGET */}
        <TradingViewWidget />
        
        {/* TABLE */}
        <Table
          title={DEFAULT_QUERY.label}
          columns={getColumns(DEFAULT_QUERY.id)}
        />
      </TableCard>
    </InvestorTableContainer>
  )
};

export default InvestorTable;
