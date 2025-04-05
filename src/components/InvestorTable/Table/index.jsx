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
// import { LoadingOverlay } from './styledComponent';

const Table = ({
  title,
  columns,
}) => {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
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
    console.log('ONCHANGEPAGE');
    changeQueryParams({ pageNumber: newPage });
  };

  const onChangeRowsPerPage = (numberOfRows) => {
    setRowsPerPage(numberOfRows);
    console.log('ONCHANGEROWSPERPAGE');
    changeQueryParams({ limit: numberOfRows });
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
          hasNextPage
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
  const fetchData = async () => {
    setLoading(true);
    try {
      const parsed = await getTransfers(queryParams, state.chain);
      console.log('parsed', parsed);
      setData(parsed);
    } catch (error) {
      console.error("Error fetching user profile", error);
      throw error;
    }
    actions.endRefetch();
    setLoading(false);
  }

  //   const query = TRANSACTION_QUERY(queryParams);
  //   const data = JSON.stringify({ query });
  //   axios({
  //     method: 'post',
  //     url: 'https://streaming.bitquery.io/graphql',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: data
  //   }).then(function (response) {

  //     console.log('parsed', parsed)
  //     setData(parsed);
  //     setLoading(false);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     setLoading(false);
  //   })
  // };

  // En caso de que se oprima el boton de GET DATA
  useEffect(() => {
    console.log('state.refetch', state.refetch);
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
