const { Team } = require("../db.js");

//sirve para poner mucha info de una desde insomnia
const createBulkTeams = async (teams) => {
  const teams = await Team.bulkCreate(teams);
  return teams;
};

module.exports = createBulkTeams;
