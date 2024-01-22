// GET | /teams
// Obtiene un arreglo con todos los teams existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const axios = require("axios");
const { Team } = require("../db.js");

const getTeamsController = async () => {
  const teamsDB = await Team.findAll();

  if (!teamsDB.length) {
    const { data } = await axios.get("http://localhost:5000/drivers");
    const teamsData = [];

    data.forEach((driver) => {
      if (driver.teams) {
        const teamSplit = driver.teams.split(/\s*,\s*/);
        teamSplit.forEach((team) => teamsData.push(team));
      }
    });

    const teamUnique = new Set(teamsData);
    const teams = [...teamUnique];

    teams.forEach(async (team) => {
      await Team.findOrCreate({
        where: { name: team },
      });
    });

    return teams;
  }
  return teamsDB.map((team) => team.name);
};

module.exports = getTeamsController;
