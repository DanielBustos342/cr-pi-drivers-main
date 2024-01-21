const getDriverForename = require("../controllers/getDriverForename.js");

module.exports = async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await getDriverForename(name);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
