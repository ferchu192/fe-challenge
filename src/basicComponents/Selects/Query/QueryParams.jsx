import React from 'react';
import PropTypes from 'prop-types';

// Components
import TextField from '@material-ui/core/TextField';

// Validations
import { chainIDRules, addressRules } from '../../../validations/rules';

// Styled
import styled from 'styled-components';

const ColumnInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnInput = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const MIN_ID = 1;

const SelectQueryParams = ({
  queryParams,
  setQueryParams,
}) => {
  return (
    <ColumnInputsContainer id="select-query-params-container">
      {/* CHAIN ID */}
      <ColumnInput id="input-chain-id">
        <TextField
          name="Chain ID"
          key="textfield-chain-id-key"
          label="Chain ID"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setQueryParams({
              ...queryParams,
              chainID: e.target.value,
              pageNumber: 1,
              pageSize: 10,
            });
          }}
          value={queryParams.chainID}
          InputProps={{ inputProps: { min: MIN_ID, step: 1, type: 'number' } }}
          error={!chainIDRules(queryParams.chainID, MIN_ID, Infinity).validation}
          helperText={chainIDRules(queryParams.chainID, MIN_ID, Infinity).message}
        />
      </ColumnInput>

      {/* ADDRESS */}
      <ColumnInput id="input-address">
        <TextField
          name="Address"
          key="textfield-address-key"
          label="Address"
          variant="outlined"
          size="small"
          type="text"
          onChange={(e) => setQueryParams({
            ...queryParams,
            address: e.target.value,
            pageNumber: 1,
            pageSize: 10,
          })}
          value={queryParams.address}
          error={!addressRules(queryParams.address).validation}
          helperText={addressRules(queryParams.address).message}
        />
      </ColumnInput>
    </ColumnInputsContainer>
  );
};

const queryParamsObjectShape = {
  chainID: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

SelectQueryParams.defaultProps = {
};

SelectQueryParams.propTypes = {
  queryParams: PropTypes.PropTypes.shape(queryParamsObjectShape).isRequired,
  setQueryParams: PropTypes.func,
};

export default SelectQueryParams;
