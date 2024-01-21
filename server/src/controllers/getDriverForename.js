// GET | /drivers/name?="..."
// Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el driver, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.


const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");

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

    const matchingApiDrivers = apiDrivers.filter((driver) => {
      const fullName = `${driver.forename} `.toLowerCase();
      return fullName.includes(normalizedSearchTerm);
    });

    const dbDrivers = await Driver.findAll({
      where: {
        forename: {
          [Op.iLike]: `%${nameSearch}%`,
        },
      },
    });

    const allDrivers = [...dbDrivers, ...matchingApiDrivers];

    return allDrivers.slice(0, 9);
  } catch (error) {
    console.error("Error en la función getDriversByName:", error);
    throw error;
  }
};
