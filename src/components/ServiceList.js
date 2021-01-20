import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filter } from "../actions/home";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const ServiceList = (props) => {
  const dispatch = useDispatch();

  const serviceHandler = useCallback(
    () => {
      dispatch(filter(props.name));
    },
    [props.name, dispatch]
  );

  return (
    <TableRow hover key={props.id} onClick={serviceHandler}>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.links}</TableCell>
    </TableRow>
  );
};

ServiceList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

export default ServiceList;
