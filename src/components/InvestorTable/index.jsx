import React, { useState } from 'react';

// BasicComponents
import SelectQuery from '../../basicComponents/Selects/Query';
import FetchButton from '../../basicComponents/FetchButton'
import Table from '../../basicComponents/Table'

// Validations
import { chainIDRules, addressRules } from '../../validations/rules';

// Moment
import Moment from 'react-moment';
import 'moment-timezone';

// Columns
import { getColumns } from './columns';

// StyledComponents
import {
  InvestorTableContainer,
  CardInput,
  CardHeader,
  CardText,
  ColumnElement,
  TableCard,
} from '../../styles/stylecomponents';

const DEFAULT_QUERY = {
  id: 'transactionAddress',
  label: 'Transaction Address'
};

const DEFAULT_QUERY_PARAMS = {
  chainID: 1,
  address: '0xa79E63e78Eec28741e711f89A672A4C40876Ebf3',
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
      <CardInput id="card-inputs">

        {/* HEADER */}
        <CardHeader>Search Transactions</CardHeader>

        {/* INPUTS */}
        <SelectQuery
          selectQuery={queryType}
          setSelectQuery={setQueryType}
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />

        {/* BUTTON */}
        <ColumnElement id="buttons">
          <FetchButton
            label="Get Data"
            loading={makeQuery}
            disabled={disabledButton}
            onClick={() => setMakeQuery(true)}
          />
        </ColumnElement>

        {/* UPDATE */}
        <ColumnElement id="update-date">
          <CardText>
            {`Last update: `}
            <Moment format="DD MMM HH:mm:ss">
              {updateDate}
            </Moment>
          </CardText>
        </ColumnElement>
      </CardInput>

      {/* TABLE */}
      <TableCard id="investor-table-container">
        <Table
          title={queryType.label}
          columns={getColumns(queryType.id)}
          queryType={queryType.id}
          initParams={queryParams}
          customParser={customParser}
          fetchCallback={fetchCallback}
          makeQuery={makeQuery}
          setMakeQuery={setMakeQuery}
        />
      </TableCard>
    </InvestorTableContainer>
  )
};

export default InvestorTable;
