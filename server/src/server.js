const express = require("express");
const server = express();
const findAllTeams = require("./controllers/findAllTeams.js");
const createTeam = require("./controllers/createTeam.js");
const createDriver = require("./controllers/createDriver.js");
const findAllDrivers = require("./controllers/findAllDrivers.js");
const findDriverById = require("./controllers/findDriverById.js");
const deletedDriver = require("./controllers/deletedDriver.js");
const createBulkTeams = require("./controllers/createBulkTeams.js");
server.use(express.json());

const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

server.get("/driver", async (req, res) => {
  const { nationality } = req.query;
  try {
    const drivers = nationality
      ? //?esto es para evitar el error de undefined
        await findAllDrivers({ nationality })
      : await findAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.get("/driver/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = findDriverById(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

server.use(morgan("dev"));
server.use(cors());

server.use(router);

module.exports = server;
