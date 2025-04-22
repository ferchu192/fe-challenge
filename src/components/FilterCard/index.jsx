import React from 'react';

// Components
import FetchButton from '../../basicComponents/FetchButton'

// StyledComponents
import {
  CardInput,
  CardHeader,
  CardText,
  ColumnElement,
  ColumnInputsContainer,
  ColumnInput,
} from './stylecomponents';

import { useCryto } from '../../context';

// Components
import Date from '../../basicComponents/Date';

import ChainSelect from './Selects/Chain';
import AddressSelect from './Selects/Address';

const FilterCard = () => {
  const {
    state,
    actions,
  } = useCryto();

  return (
    <CardInput id="card-inputs">

        {/* HEADER */}
        <CardHeader>Search Transactions</CardHeader>

        {/* INPUTS */}
      <ColumnInputsContainer id="select-query-params-container">
        <ColumnInput id="input-chain-id">
          <ChainSelect />
        </ColumnInput>

        <ColumnInput id="input-address">
          <AddressSelect />
        </ColumnInput>
      </ColumnInputsContainer>
        

      {/* BUTTON */}
      <ColumnElement id="buttons">
        <FetchButton
          label="Get Data"
          loading={state.refetch}
          disabled={state.refetch}
          onClick={() => actions.refetch()}
        />
      </ColumnElement>

      {/* UPDATE */}
      <ColumnElement id="update-date">
        <CardText>
          <Date label="Last Update" date={state.lastUpdate} />
        </CardText>
      </ColumnElement>
    </CardInput>
  );
};

export default FilterCard;