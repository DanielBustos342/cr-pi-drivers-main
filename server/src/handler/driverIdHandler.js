const getDriverById = require("../controllers/getDriverById.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriverById(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
