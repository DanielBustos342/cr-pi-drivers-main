const getFindForename = require("./controllers/postCreateDriver.js");
const getAllDrivers = require("./controllers/getFindAllDrivers.js");
const getDriverById = require("./controllers/getFindDriverById.js");

//!buscar todos los drivers
server.get("/driver", async (req, res) => {
  try {
    const drivers = await getAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//!si puedo usar
server.get("/driver/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriverById(id);
    res.status(200).json(driver);
  } catch (error) {
    console.log("errorrrrrrrrrrrrrrrrrrr");
    // res.status(400).json({ error: error.message });
  }
});
//!creo q no se puede usar desde aqui
server.get("/driver", async (req, res) => {
  const { forename } = req.query;
  try {
    const driver = await getFindForename({ forename });
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
