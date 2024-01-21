// GET | /drivers/name?="..."
// Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el driver, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.

const axios = require("axios");
const { Driver } = require("../db.js");
const { Op } = require("sequelize");

imgDefault = "../assets/imgErrorLoading.jpg";

module.exports = async (nameSearch) => {
  try {
    const apiResponse = await axios.get("http://localhost:5000/drivers");

    const apiDrivers = apiResponse.data.map((apiDriver) => {
      return {
        id: apiDriver.id,
        forename: apiDriver.name.forename,
        surname: apiDriver.name.surname,
        image: apiDriver.image.url,
        dob: apiDriver.dob,
        teams: apiDriver.teams,
      };
    });

    const normalizedSearchTerm = nameSearch.toLowerCase();

    const matchingApiDrivers = apiDrivers.filter((apiDriver) => {
      const fullName = `${apiDriver.forename} `.toLowerCase();
      return fullName.includes(normalizedSearchTerm);
    });

    const driversDB = await Driver.findAll({
      where: {
        forename: {
          [Op.iLike]: `%${nameSearch}%`,
        },
      },
    });

    const allDrivers = [...driversDB, ...matchingApiDrivers];

    return allDrivers.slice(0, 15);
  } catch (error) {
    console.error("Error en la función getDriversByName:", error);
    throw error;
  }
};
