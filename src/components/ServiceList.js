import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../actions/home";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const ServiceList = (props) => {
  const dispatch = useDispatch();
  const { selectedService } = useSelector((state) => state.home);

  const serviceHandler = useCallback(
    () => {
      dispatch(filter(props.name));
    },
    [props.name, dispatch]
  );

  return (
    <TableRow hover selected={selectedService == props.name ? true : false } key={props.id} onClick={serviceHandler}>
      <TableCell>{props.name}</TableCell>
      <TableCell><div style={{'word-break': 'break-all'}}>{props.links}</div></TableCell>
    </TableRow>
  );
};

ServiceList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
};

export default ServiceList;
