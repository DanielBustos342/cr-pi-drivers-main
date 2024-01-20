const axios = require("axios");
const URL_BASE = "http://localhost:5000/drivers/";

module.exports = async (id) => {
  try {
    const response = await axios.get(`${URL_BASE}/${id}`);
    return {
      ...response.data,
      Team: response.team,
    };
  } catch (error) {
    throw new Error(`Driver with ID ${id} not found in the API`);
  }
};
