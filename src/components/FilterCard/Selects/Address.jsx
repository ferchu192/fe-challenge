import React from 'react';

// Components
import TextField from '@material-ui/core/TextField';

import { useCryto } from '../../../context';

const AddressSelect = () => {
  const {
    state,
    actions,
  } = useCryto();

  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    actions.setAddress(newAddress);
  };

  return (
    <TextField
      name="Address"
      key="textfield-address-key"
      label="Address"
      variant="outlined"
      fullWidth
      type="text"
      onChange={handleAddressChange}
      value={state.address}
    />
  );
};

export default AddressSelect;