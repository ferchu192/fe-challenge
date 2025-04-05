import React from 'react';

// Components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { useCryto } from '../../../context';

const ChainSelect = () => {
  const {
    state,
    actions,
  } = useCryto();

  const { chains } = state;

  const handleChainChange = (event) => {
    const selectedChain = event.target.value;
    console.log('selectedChain', selectedChain);
    actions.setChain(selectedChain);
  };

  return (
    <TextField
      name="Chain"
      key="textfield-chain-id-key"
      label="Chain"
      variant="outlined"
      select
      value={state.chain}
      onChange={handleChainChange}
      fullWidth
      >
      {chains.map((chain) => (
        <MenuItem key={chain.chain} value={chain}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={chain.icon} 
              alt={chain.name} 
              style={{ width: 24, height: 24, marginRight: 8 }} 
            />
            {chain.name}
          </div>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ChainSelect;