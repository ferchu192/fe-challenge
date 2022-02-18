import { createTheme } from "@material-ui/core/";

export const getTableTheme = () => createTheme({
  overrides: {
    // Iconos
    MuiSvgIcon: {
      root: {
        fontSize: '1.25rem'
      },
      colorError: {
        color: '#f43636',
      },
      colorAction: {
        color: '#90f436'
      }
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
          backgroundColor: 'rgb(95, 156, 227)'
        },
      },
    },
    // Footer
    MuiTableCell: {
      footer: {
        border: '1px solid transparent',
      },
    }
  }
})