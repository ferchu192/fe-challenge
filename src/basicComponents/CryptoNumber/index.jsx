import React from 'react';

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
    return Number.parseFloat(number).toFixed(decimals);
  }
  return (
    <CryptoSpan id="crypto-number">
      {formatNumber(value)}
      {/* <CryptoSymbol id="crypto-symbol">{symbol}</CryptoSymbol> */}
      <img src={icon} alt={symbol} width={'14'} />
    </CryptoSpan>
  )
};

export default CryptoNumber;