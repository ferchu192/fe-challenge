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
  knownWallets: [
    // Ethereum
    { address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", label: "Vitalik Buterin" },
    { address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", label: "Binance 8 (Ethereum)" },
    { address: "0x564286362092D8e7936f0549571a803B203aAceD", label: "Binance 7 (Ethereum)" },
    { address: "0xF977814e90dA44bFA03b6295A0616a897441aceC", label: "Binance Cold Wallet (Ethereum)" },
    { address: "0x267be1c1D684F78cb4F6a176C4911b741E4Ffdc0", label: "Kraken Exchange (Ethereum)" },
    { address: "0x28C6c06298d514Db089934071355E5743bf21d60", label: "Binance 14 (Ethereum)" },
    { address: "0x05f51Aab068Caa6abFbd3Ef82f8cF49eD3f133A3", label: "Polkadot Multisig (Ethereum)" },
    { address: "0x00000000219ab540356cBB839Cbe05303d7705Fa", label: "ETH2 Beacon Deposit Contract" },
  
    // BNB Smart Chain
    { address: "0x3fda67f7583380e67ef93072294a7fac882fd7e7", label: "Binance BSC Wallet" },
    { address: "0x564286362092d8e7936f0549571a803b203aaced", label: "Binance Hot Wallet (BSC)" },
    { address: "0xE68d4c9A90cE1D0eB36795FbC8F46F0Bd2450eED", label: "Binance Cold Wallet (BSC)" },
    { address: "0x55d398326f99059fF775485246999027B3197955", label: "USDT Contract (BSC)" },
    { address: "0x73feaa1eE314F8c655E354234017bE2193C9E24E", label: "PancakeSwap: MasterChef" },
    { address: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0", label: "PancakeSwap: Router" },
    { address: "0x5eD9D1d4eB9FDF83bA305F0A1D1Fdb9481fDb9b1", label: "Venus Protocol" }
  ],  
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