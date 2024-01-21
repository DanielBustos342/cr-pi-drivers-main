const { Router } = require("express");
const getDriversHandlers = require("../handler/getDriverHandlers.js");
const getDriverForenameHandler = require("../handler/getDriverForenameHandler.js");
const getDriverIdHandler = require("../handler/getDriverIdHandler.js");
const getTeamsHandlers = require("../handler/getTeamsHandlers.js");

const driversRouter = Router();

driversRouter.get("/", getDriversHandlers);
driversRouter.get("/name", getDriverForenameHandler);
driversRouter.get("/:id", getDriverIdHandler);
driversRouter.get("/", getTeamsHandlers);

module.exports = driversRouter;
