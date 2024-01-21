const getFindForename = require("../controllers/getFindForename.js");

module.exports = async (req, res) => {
  const { name } = req.query;

  try {
    const drivers = await getFindForename(name);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
