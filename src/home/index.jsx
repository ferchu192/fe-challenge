import React from 'react';

// Theme
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

// HorizontalTabs
import HorizontalTab from '../basicComponents/Tabs';

// Tabs
import InvestorTable from '../components/InvestorTable';
import InvestorCharts from '../components/InvestorCharts'

// import icon from '../assets/pancake_icon.png'

import {
  ImageIcon,
  IconContainer,
} from '../components/FilterCard/stylecomponents';

import styled from 'styled-components';
import FilterCard from '../components/FilterCard';

const HomeContainer = styled.div`
  background-color: #f3f3f3;
`;

const Home = () => {
  const prefersDarkMode = false;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#03518a',
          },
          secondary: {
            main: '#ffe66d',
            contrastText: '#222222',
          },
          action: {
            active: '#03518a',
          }
        },
        overrides: {
          // Iconos
          MuiSvgIcon: {
            root: {
              fontSize: '1.5rem',
            },
            colorError: {
              color: '#dc3545',
            },
            colorWarning: {
              color: '#ffc107',
            },
            colorAction: {
              color: '#00a186',
            },
          },
          // Columnas
          MUIDataTableHeadCell: {
            toolButton: {
              fontWeight: 'bold',
            },
            sortAction: {
              alignItems: 'center',
            },
            fixedHeader: {
              fontWeight: 'bold',
            }
          },
          // Icono sort
          MuiTableSortLabel: {
            icon: {
              color: '#3e3e3e !important',
            },
          },
          // Footer de paginacion
          MuiTablePagination: {
            caption: {
              fontSize: '0.9rem'
            },
            input: {
              fontSize: '0.9rem'
            }
          },
          // Card
          MuiPaper: {
            rounded: {
              borderRadius: '1rem',
            },
          },
          // Toolbar
          MUIDataTableToolbar: {
            icon: {
              '&:hover': {
                color: 'white',
                backgroundColor: '#03518a'
              },
            },
          },
          // Footer
          MuiTableCell: {
            footer: {
              border: '1px solid transparent',
            },
          },
          // MuiSelect: {
          //   select: {
          //     padding: '0.8rem',
          //   },
          // }
        }
      },
    ),
    [prefersDarkMode],
  );

  const menuItems = [
    {
      id: 'transactions',
      label: 'Transactions',
      component: <InvestorTable />
    },
    /*{
      id: 'charts',
      label: <IconContainer id="img-container"> <ImageIcon src='pancake_icon.png'/>Charts</IconContainer>,
      component: <InvestorCharts />
    },
    */
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <HomeContainer id="home-container">
        <HorizontalTab menuItems={menuItems} />
        {/* <FilterCard /> */}
        {/* <InvestorTable /> */}
      </HomeContainer>
    </MuiThemeProvider>
  )
};

export default Home;
