// GET | /teams
// Obtiene un arreglo con todos los teams existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const axios = require("axios");
const { Team } = require("../db.js");

module.exports = async () => {
  try {
    const allTeamsDB = await Team.findAll();

    if (!allTeamsDB.length) {
      try {
        const response = await axios.get("http://localhost:5000/drivers");
        const drivers = response.data;

        const teamArray = drivers.map((driver) => driver.teams);
        const definedTeams = teamArray.filter((teams) => teams !== undefined);

        const splitTeams = definedTeams.reduce((acc, teams) => {
          const teamArray = teams.split(",").map((team) => team.trim());
          return [...acc, ...teamArray];
        }, []);

        const uniqueTeamSet = new Set(splitTeams);
        const driverTeams = [...uniqueTeamSet];

        const teamObject = driverTeams.map((name) => ({ name }));
        await Team.bulkCreate(teamObject);
        return driverTeams.sort();
      } catch (error) {
        console.error("Error al obtener los equipos de la API:", error);
        return [];
      }
    } else {
      const driverTeams = allTeamsDB.map((driver) => driver.name);
      return driverTeams.sort();
    }
  } catch (error) {
    console.error("Error al devolver Teams:", error);
  }
};
