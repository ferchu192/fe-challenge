import React from "react";

// Components
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MuiTablePagination from "@material-ui/core/TablePagination";

const CustomFooter = ({
  textLabels,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
  hasNextPage,
}) => {

  const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 24px 0px 24px'
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell style={footerStyle} colSpan={1000}>
          <MuiTablePagination
            component="div"
            count={hasNextPage ? -1 : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={textLabels.rowsPerPage}
            labelDisplayedRows={({ from, to }) => `${from}-${to}`}
            backIconButtonProps={{
              'aria-label': textLabels.previous,
            }}
            nextIconButtonProps={{
              'aria-label': textLabels.next,
            }}
            rowsPerPageOptions={[10, 20, 100]}
            onPageChange={(e, page) => onChangePage(page)}
            onRowsPerPageChange={(e) => onChangeRowsPerPage(e.target.value)}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  )
};

export default CustomFooter;