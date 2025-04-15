/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import MUIDataTable from "mui-datatables";
import CircularProgress from '@material-ui/core/CircularProgress';

// Footer
import CustomFooter from './CustomFooter';

// Context
import { useCryto } from '../../../context';

import { getTransfers } from '../../../api/transfers';

// StyleComponents
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableContainer: {
    position: 'relative',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

const Table = ({
  title,
  columns,
}) => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [queryParams, setQueryParams] = useState();
  const [loading, setLoading] = useState();

  const { state, actions } = useCryto();

  /*
  -------------------- PAGINATION --------------------
  */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Update de queryParams
  const changeQueryParams = ({ limit, pageNumber }) => { 
    setQueryParams((prevState) => ({
      ...prevState,
      offset: pageNumber ? pageNumber * rowsPerPage : page,
      limit: limit ? limit : rowsPerPage,
      chainID: state.chain.chain,
      address: state.address,
    }))
  }

  const onChangePage = (newPage) => {
    setPage(newPage);
    changeQueryParams({ pageNumber: newPage });
  };

  const onChangeRowsPerPage = (numberOfRows) => {
    setRowsPerPage(numberOfRows);
    changeQueryParams({ limit: numberOfRows });
  };

  /*
    -------------------- TABLE OPTIONS --------------------
  */
  const options = useMemo(() => ({
    filter: false,
    sort: false,
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
          hasNextPage
        />
      );
    },
    textLabels: {
      body: {
        noMatch: ' ',
      },
    },
  }), [loading]);

  /*
    -------------------- FETCHING --------------------
  */
  const fetchData = async () => {
    setLoading(true);
    try {
      const parsed = await getTransfers(queryParams, state.chain);
      setData(parsed);
    } catch (error) {
      console.error("Error fetching user profile", error);
      throw error;
    }
    actions.endRefetch();
    setLoading(false);
  }

  // En caso de que se oprima el boton de GET DATA
  useEffect(() => {
    if (state.refetch) {
      changeQueryParams({
        limit: rowsPerPage,
        pageNumber: 0,
        chain: state.chain.chain,
        address: state.address,
      })
    }
  }, [state.refetch]);

  useEffect(() => {
    if (queryParams) fetchData();
  }, [queryParams]);

  /*
    -------------------- RENDER --------------------
  */
  return (
    <div id="table-container" className={classes.tableContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <CircularProgress size={60} />
        </div>
      )}
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}

const colummnObjectShape = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.object,
};

Table.defaultProps = {
  title: 'Table',
};

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape(colummnObjectShape)).isRequired,
};

export default Table;
