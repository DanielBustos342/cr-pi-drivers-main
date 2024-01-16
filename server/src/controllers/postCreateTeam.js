const { Team } = require("../db.js");

const createTeam = async (name) => {
  const newTeam = await Team.create({ name });
  return newTeam;
};

module.exports = createTeam;
