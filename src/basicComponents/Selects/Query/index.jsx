import React from 'react';
import PropTypes from 'prop-types';

// Components
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// QueryParams
import QueryParams from './QueryParams';

const SelectQuery = ({
  queryParams,
  setQueryParams,
}) => {
  return (
    <div id="select-query-container">
      {/* SELECT QUERY */}
      {/* <FormControl fullWidth>
        <InputLabel id="select-query-input-label">What are you looking for?</InputLabel>
        <Select
          labelId="select-query"
          id="select-query-id"
          variant="outlined"
          value={selectQuery}
          label="What are you looking for?"
          onChange={(e) => setSelectQuery(e.target.value)}
        > 
          <MenuItem value="transactionAddress">Transsaction for address</MenuItem>
          <MenuItem value='tokenBalance'>Token Balance</MenuItem>
          <MenuItem value='historicPortfolio'>Historic Portfolio</MenuItem>
        </Select>
      </FormControl> */}

      {/* QUERY PARAMS FIELDS */}
      <QueryParams
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
    </div>
  )
};

const queryParamsObjectShape = {
  chainID: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

SelectQuery.defaultProps = {
};

SelectQuery.propTypes = {
  queryParams: PropTypes.shape(queryParamsObjectShape).isRequired,
  setQueryParams: PropTypes.func.isRequired,
};

export default SelectQuery;
