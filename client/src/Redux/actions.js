import axios from "axios";
import {
  FILTER_ALL_TEAMS,
  FILTER_APIDB,
  FILTER_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_DETAIL,
  ORDER_ASC_DESC,
  ORDER_BY_DOB,
  SEARCH_DRIVER,
} from "./actions-types.js";

export const getDrivers = () => {
  try {
    return async function (dispatch) {
      const drivers = await axios(`/drivers`);
      dispatch({
        type: GET_DRIVERS,
        payload: drivers.data,
      });
    };
  } catch (error) {
    window.alert(error.resporse.data.error);
  }
};

export const getDriverDetail = (id) => {
  return async function (dispatch) {
    const driverDetail = await axios(`/drivers/${id}`);
    dispatch({
      type: GET_DRIVER_DETAIL,
      payload: driverDetail.data,
    });
  };
};

export const searchDriver = (name) => {
  return {
    type: SEARCH_DRIVER,
    payload: name,
  };
};

export const orderDrivers = (payload) => {
  return {
    type: ORDER_ASC_DESC,
    payload,
  };
};

export const orderByDob = (payload) => {
  return {
    type: ORDER_BY_DOB,
    payload,
  };
};

export const allTeams = () => {
  return async (dispatch) => {
    const teams = await axios.get(`/teams`);
    dispatch({
      type: FILTER_ALL_TEAMS,
      payload: teams.data,
    });
  };
};

export const filterTeams = (payload) => {
  return {
    type: FILTER_TEAMS,
    payload,
  };
};

export const filterApiDB = (payload) => {
  return {
    type: FILTER_APIDB,
    payload,
  };
};
