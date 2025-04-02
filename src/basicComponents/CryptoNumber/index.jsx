import React from 'react';

// Tooltip
import Tooltip from '../Tooltip';

// StyledComponents
import styled from 'styled-components';

const CryptoSpan = styled.span`
  display: flex;
  gap: 0.5rem;
`;

const CryptoSymbol = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const CryptoNumber = ({ value, decimals, symbol, icon }) => {
  const formatNumber = (number) => {
    const toFixed = decimals > 8 ? 8 : decimals;
    if (number > 0) return Number.parseFloat(number).toFixed(toFixed);
    return 0;
  }
  return (
    <CryptoSpan id="crypto-number">
      <img src={icon} alt={symbol} width={'14'} />
      <Tooltip id="tooltip-crypto-number" title={value} >
        <span>
          {formatNumber(value)}
        </span>
      </Tooltip>
      {/* <CryptoSymbol id="crypto-symbol">{symbol}</CryptoSymbol> */}
    </CryptoSpan>
  )
};

export default CryptoNumber;