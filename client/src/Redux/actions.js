import axios from "axios";
import { GET_ALL_DRIVERS } from "./actions-types.js";

const URL_BASE = "https://pi-drivers.onrender.com/drivers";

export const getAllDrivers = () => {
  try {
    return async function (dispatch) {
      const response = await axios(`${URL_BASE}`);
      return dispatch({
        type: GET_ALL_DRIVERS,
        payload: response.data,
      });
    };
  } catch (error) {
    window.alert(error.resporse.data.error);
  }
};
