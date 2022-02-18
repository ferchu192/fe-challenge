import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// Icon
import SearchIcon from '@material-ui/icons/Search';

// StyledComponent
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
`;

const SpinnerContainer = styled.div`
  display: flex;
  margin-left: 0.2rem;
  width: 1rem;
`;

const FetchButton = ({
  label,
  onClick,
  loading,
  disabled,
}) => {
  return (
    <ButtonContainer id="fetch-button-container">
      <Button
        variant="contained"
        onClick={() => onClick()}
        disabled={loading || disabled}
        color="primary"
      >
        {label}
        <SpinnerContainer id="spinner-container">
          {
            loading
              ? <CircularProgress size="0.9rem" />
              : <SearchIcon fontSize="small"/>
          }
        </SpinnerContainer>
      </Button>
    </ButtonContainer>
  )
};

FetchButton.defaultProps = {
  loading: false,
  disabled: false,
};

FetchButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FetchButton;
