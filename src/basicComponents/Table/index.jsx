/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@material-ui/core/";
import CircularProgress from '@material-ui/core/CircularProgress';

// Footer
import CustomFooter from './CustomFooter';

// Theme
import { getTableTheme } from './theme';

// Helpers
import { getQuery } from './helpers';

// StyleComponents
// import { LoadingOverlay } from './styledComponent';

const Table = ({
  title,
  columns,
  queryType,
  initParams,
  customParser, // Funcion de como parsear el result de la query
  fetchCallback, // Funcion de callback al terminar el fetch
  makeQuery, // Flag para determinar si hay que hacer un fetch
  setMakeQuery, // Para notificar al componente padre que termino la query
}) => {
  // const columns = ["block_height", "from_address", "value", "value_quote"];
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [queryParams, setQueryParams] = useState(initParams);
  const [loading, setLoading] = useState();

  /*
  -------------------- PAGINATION --------------------
  */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [hasNextPage, setHasNextPage] = useState();

  // Update de queryParams
  const changeQueryParams = ({ pageSize, pageNumber }) => {
    setQueryParams((prevState) => ({
      ...prevState,
      pageNumber: pageNumber ? pageNumber : page,
      pageSize: pageSize ? pageSize : rowsPerPage,
    }))
  }

  const onChangePage = (newPage) => {
    setPage(newPage);
    changeQueryParams({ pageNumber: newPage + 1 });
  };

  const onChangeRowsPerPage = (numberOfRows) => {
    setRowsPerPage(numberOfRows);
    changeQueryParams({ pageSize: numberOfRows });
  };

  /*
    -------------------- TABLE OPTIONS --------------------
  */
  const noMatchText = () => {
    if (loading) return <CircularProgress />
    else {
      if (!((data) && (data.items))) return errorMessage;
    }
  }
  const options = useMemo(() => ({
    filter: false,
    // sort: false,
    search: false,
    selectableRows: 'none',
    page,
    rowsPerPage,
    // serverSide: true,
    onChangePage,
    onChangeRowsPerPage,
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
      return (
        <CustomFooter
          page={page}
          rowsPerPage={rowsPerPage}
          changeRowsPerPage={changeRowsPerPage}
          changePage={changePage}
          textLabels={textLabels}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          hasNextPage={hasNextPage}
        />
      );
    },
    textLabels: {
      body: {
        noMatch: noMatchText(),
      },
    },
  }), [loading]);

  /*
    -------------------- FETCHING --------------------
  */
  const fetchData = () => {
    setLoading(true);
    const query = getQuery(queryType, queryParams);
    fetch(query)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setMakeQuery(false);
        try {
          const { error, error_message: message } = json;
          if (error) {
            setErrorMessage(message);
            setData([])
          } else {

            fetchCallback(json);
            const pagination = json.data.pagination.has_more;
            const parsed = customParser(json);
            setHasNextPage(pagination);
            setData(parsed);
          }
        } catch (e) {
          console.error('Error getting data: ', e);
          setErrorMessage('Error getting data')
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('error: ', error);
        setData([])
        setMakeQuery(false);
        setLoading(false);
        setErrorMessage('Error getting data')
      })
  };

  // Cuando se cambia desde fuera los valores y se hace un GET DATA
  useEffect(() => {
    if (makeQuery) {
      // Reiniciar la pagina ya que es sobre una nueva CHAIN_ID o una nueva ADDRESS
      // o simplemente se quizo resetear la query con los mismos valores
      setPage(0);
      if (queryParams === initParams) fetchData();
      setQueryParams(initParams);
    }
  }, [makeQuery]);

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  /*
    -------------------- RENDER --------------------
  */
  return (
    <ThemeProvider theme={getTableTheme({
      disableToolBar: false,
      boxShadow: false,
    })}>
      <div id="table-container">
        <MUIDataTable
          title={title}
          data={data}
          columns={columns}
          options={options}
        />
        {/* {
          !loading && <LoadingOverlay id="loading-overlay">Loading</LoadingOverlay>
        } */}
      </div>
    </ThemeProvider>
  )
}

const colummnObjectShape = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

const initParamsObjectShape = {
  chainID: PropTypes.number,
  address: PropTypes.string,
  pageNumber: PropTypes.number,
  pageSize: PropTypes.number,
};

Table.defaultProps = {
  title: 'Table',
  initParams: {},
  fetchCallback: () => {},
  makeQuery: false,
  setMakeQuery: () => {},
};

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape(colummnObjectShape)).isRequired,
  queryType: PropTypes.string.isRequired,
  initParams: PropTypes.shape(initParamsObjectShape),
  customParser: PropTypes.func.isRequired, // Funcion de como parsear el result de la query
  fetchCallback: PropTypes.func, // Funcion de callback al terminar el fetch
  makeQuery: PropTypes.bool, // Flag para determinar si hay que hacer un fetch
  setMakeQuery: PropTypes.func, // Para notificar al componente padre que termino la query
};

export default Table;