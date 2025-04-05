import React, { createContext, useContext, useReducer } from 'react';

import Ethereum from '../schemas/etherium';
import BNB from '../schemas/bnb';
import Polygon from '../schemas/polygon';

// Define action types
export const ACTION_TYPES = {
  SET_CHAIN: 'SET_CHAIN',
  SET_ADDRESS: 'SET_ADDRESS',
  REFETCH: 'REFETCH',
  REFETCH_END: 'REFETCH_END',
};

const CHAINS = [new Ethereum(), new BNB(), new Polygon()];

// Initial state
const initialState = {
  chain: CHAINS[0],
  chains: CHAINS,
  address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  refetch: true,
  lastUpdate: new Date(),
};

// Reducer function
const cryptoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CHAIN:
      return {
        ...state,
        chain: action.payload,
      };
    case ACTION_TYPES.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ACTION_TYPES.REFETCH:
      return {
        ...state,
        refetch: true,
      };
    case ACTION_TYPES.REFETCH_END:
      return {
        ...state,
        refetch: false,
      }
    case ACTION_TYPES.SET_LAST_UPDATE:
      return {
        ...state,
        lastUpdate: action.payload,
      };
    default:
      return state;
  }
};

// Create the context
const CryptoContext = createContext();

// Create the context provider component
export const CryptoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cryptoReducer, initialState);

  // Action creators
  const actions = {
    setChain: (chain) => {
      dispatch({ type: ACTION_TYPES.SET_CHAIN, payload: chain });
    },
    setAddress: (address) => {
      dispatch({ type: ACTION_TYPES.SET_ADDRESS, payload: address });
    },
    refetch: () => {
      dispatch({ type: ACTION_TYPES.REFETCH })
    },
    endRefetch: () => {
      dispatch({ type: ACTION_TYPES.REFETCH_END })
    },
    setLastUpdate: () => {
      dispatch({ type: ACTION_TYPES.SET_LAST_UPDATE, payload: new Date() })
    }
  };

  // Context value object
  const contextValue = {
    state,
    dispatch,
    actions,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryto = () => useContext(CryptoContext)