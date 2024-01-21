const postDriver = require("../controllers/postDriver.js");

module.exports = async (req, res) => {
  const { forename, surname, description, image, nationality, dob, teams } =
    req.body;

  if (!Array.isArray(teams) || teams.length === 0) {
    return res.status(400).json({ error: error.message });
  }

  if (!forename || !surname || !description || !image || !nationality || !dob) {
    return res.status(400).json({ error: error.message });
  }

  try {
    const newDriver = await postDriver(
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
      teams
    );
    res.status(200).jscon(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
