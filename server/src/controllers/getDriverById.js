// 📍 GET | /drivers/:idDriver
// Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
// El driver es recibido por parámetro (ID).
// Tiene que incluir los datos del/los team/s del driver al que está asociado.
// Debe funcionar tanto para los drivers de la API como para los de la base de datos.

const axios = require("axios");
const { Driver, Team } = require("../db.js");

module.exports = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    return {
      ...response.data,
      Team: response.team,
    };
  } catch (error) {
    throw new Error(`Driver with ID ${id} not found in the API`);
  }
};
