const { Team } = require("../db.js");

const findAllTeams = async () => {
  const teams = await Team.findAll();
  return teams;
};

module.exports = findAllTeams;
