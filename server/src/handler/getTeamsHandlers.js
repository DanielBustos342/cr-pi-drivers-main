const getTeams = require("../controllers/getTeams.js");

module.exports = async (req, res) => {
  try {
    const teams = await getTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};