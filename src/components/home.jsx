import React from 'react';

// Theme
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

// HorizontalTabs
import HorizontalTab from '../basicComponents/Tabs';

// Tabs
import InvestorTable from './InvestorTable';
import InvestorCharts from './InvestorCharts'

// import icon from '../assets/pancake_icon.png'

import {
  ImageIcon,
  IconContainer,
} from '../styles/stylecomponents';

import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #f3f3f3;
`;

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(95, 156, 227)',
      contrastText: 'white',
    }
  },
});

const Home = () => {

  const menuItems = [
    {
      id: 'transactions',
      label: 'Transactions',
      component: <InvestorTable />
    },
    {
      id: 'charts',
      label: <IconContainer id="img-container"> <ImageIcon src='pancake_icon.png'/>Charts</IconContainer>,
      component: <InvestorCharts />
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <HomeContainer id="home-container">
        <HorizontalTab menuItems={menuItems} />
      </HomeContainer>
    </MuiThemeProvider>
  )
};

export default Home;
