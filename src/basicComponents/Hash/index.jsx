import React from 'react';

import Tooltip from '../Tooltip';

import styled from 'styled-components';

// Styled
const HashText = styled.span`
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:100px;
  display:inline-block;
`;

const Hash = ({ hash, withOutTooltip }) => {
  return (
    <div id="hash-container">
      <Tooltip
        title={hash}
        withOutTooltip={withOutTooltip}
      >
        <HashText id="hash-text">
          {hash}
        </HashText>
      </Tooltip>
    </div>
  )
};

export default Hash;