// GET | /drivers
// Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
// IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

const { Driver, Team } = require("../db.js");
const axios = require("axios");

const imgDefault = "../assets/imgErrorLoading.jpg";

module.exports = async () => {
  try {
    const apiResponse = await axios.getAdapter(`http://localhost:5000/drivers`);

    const apiDrivers = apiResponse.data.map((apiDriver) => {
      return {
        id: apiDriver.id,
        forename: apiDriver.name.forename,
        surname: apiDriver.name.surname,
        image: apiDriver.image.url || imgDefault,
        dob: apiDriver.dob,
        teams: apiDriver.teams,
      };
    });

    const driversDB = await Driver.findAll({ include: Team });

    const allDrivers = [...driversDB, ...apiDrivers];

    return allDrivers;
  } catch (error) {
    console.error("Error al devolder drivers: ", error);
  }
};
