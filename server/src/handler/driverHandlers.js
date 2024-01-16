const findAllTeams = require("./controllers/getFindAllTeams.js");
const createTeam = require("./controllers/postCreateTeam.js");
const createDriver = require("./controllers/postCreateDriver.js");
const getFindAllDrivers = require("./controllers/getFindAllDrivers.js");
const getFindDriverById = require("./controllers/getFindDriverById.js");
const deletedDriver = require("./controllers/deletedDriver.js");
const createBulkTeams = require("./controllers/postCreateBulkTeams.js");

//!si puedo usar
server.get("/driver", async (req, res) => {
  const { nationality } = req.query;
  try {
    const drivers = nationality
      ? //?esto es para evitar el error de undefined
        await getFindAllDrivers({ nationality })
      : await getFindAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//!si puedo usar
server.get("/driver/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getFindDriverById(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//!creo q no se puede usar desde aqui
server.post("/driver", async (req, res) => {
  try {
    const { firstname, lastname, detail, nationality, date_of_birth, teams } =
      req.body;
    const newDriver = await createDriver({
      firstname,
      lastname,
      detail,
      nationality,
      date_of_birth,
      teams,
    });
    res.status(200).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.delete("/driver/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDriver = await deletedDriver(id);
    res.status(200).json(deletedDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.get("/Team", async (req, res) => {
  try {
    const teams = await findAllTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.post("Team", async (req, res) => {
  try {
    const { name } = req.body;
    const newTeam = await createTeam(name);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//sirve para poner mucha info de una sola vez
server.post("/team/bulk", async (req, res) => {
  try {
    const { teams } = req.body;
    const created = await createBulkTeams(teams);
    res.status(200).json({ response: "created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
