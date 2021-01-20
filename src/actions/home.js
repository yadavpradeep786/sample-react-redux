import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";
import Swal from "sweetalert2";
import apiCaller from "../utils/apiCaller";
import { SERVICE_URL, PROVIDER_URL } from "../utils/configs";

/**
 * @module Redux
 */

export const fetchServices = () => {
  return (dispatch) => {
    dispatch(startLoading());

    apiCaller(SERVICE_URL)
      .then(({ data }) => {
        dispatch(services(data));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.error(e);
        dispatch(finishLoading());
        Swal.fire("Fail", e.message, "error");
      });
  };
};

export const services = (data) => ({
  type: types.services,
  payload: {
		data: data.data,
		meta: data.meta
  },
});

export const fetchProviders = () => {
  return (dispatch) => {
    dispatch(startLoading());

    apiCaller(PROVIDER_URL)
      .then(({ data }) => {
        dispatch(providers(data));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.error(e);
        dispatch(finishLoading());
        Swal.fire("Fail", e.message, "error");
      });
  };
};

export const providers = (data) => ({
  type: types.providers,
  payload: {
		data: data.data,
		meta: data.meta
  },
});

export const filter = (serviceId) => ({
  type: types.filter,
  payload: {
		serviceId
  },
});
