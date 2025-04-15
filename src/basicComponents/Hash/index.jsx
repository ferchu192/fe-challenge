import React from 'react';

import Link from '@material-ui/core/Link';

import Tooltip from '../Tooltip';

import styled from 'styled-components';

// Styled
const HashText = styled(Link)`
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:100px;
  display:inline-block;
`;

const Hash = ({ hash, withOutTooltip, link }) => {
  return (
    <div id="hash-container">
      <Tooltip
        title={hash}
        withOutTooltip={withOutTooltip}
        enterDelay={1000}
      >
        <HashText id="hash-text" href={`${link}/${hash}`} target="_blank">
          {hash}
        </HashText>
      </Tooltip>
    </div>
  )
};

export default Hash;