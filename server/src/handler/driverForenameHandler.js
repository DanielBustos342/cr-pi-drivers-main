const getFindForename = require("../controllers/getFindForename.js");

module.exports = async (req, res) => {
  const { forename } = req.query;
  try {
    const driver = await getFindForename({ forename });
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
