import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TablePaginationActions } from "./Pagination";

const useStyles2 = makeStyles({
  header: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
  },
  profileImg: {
    height: '120px',
    width: '120px',
    display: 'flex',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  img: {
    width: '100%'
  }
});

const ProviderSection = (props) => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.count - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Provider Image</TableCell>
            <TableCell className={classes.header}>Provider Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.count > 0
            ? props.data.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : []
          ).map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className={classes.profileImg}>
                  {row.attributes["profile-image"] ? (
                    <img
                      className={classes.img}
                      src={row.attributes["profile-image"]}
                      alt="new"
                    />
                  ) : (
                    <img
                      className={classes.img}
                      src="/user-profile-default.png"
                      alt="new"
                    />
                  )}
                </div>
              </TableCell>
              <TableCell>
                <b>Name:</b> {row.attributes.name}<br></br>
                <b>Sub-specialties:</b>
                {row.attributes.subspecialties.map((specialty, i) => (
                  <div key={i}>{specialty}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}

          {!props.count && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6}>
                No Match found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={props.count}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
ProviderSection.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
};
export default ProviderSection;
