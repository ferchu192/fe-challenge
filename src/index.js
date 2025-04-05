import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import { CryptoContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContextProvider>
      <Home />
    </CryptoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)