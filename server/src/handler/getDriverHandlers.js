const getAllDrivers = require("../controllers/getAllDrivers.js");

module.exports = async (req, res) => {
  try {
    const drivers = await getAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
