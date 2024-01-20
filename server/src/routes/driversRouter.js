const { Router } = require("express");
const driversHandlers = require("../handler/driverHandlers.js");
const driverForenameHandler = require("../handler/driverForenameHandler.js");
const driverIdHandler = require("../handler/driverIdHandler.js");

const driversRouter = Router();

driversRouter.get("/drivers", driversHandlers);
driversRouter.get("/drivers?name.forename=name", driverForenameHandler);
driversRouter.get("/:id", driverIdHandler);

module.exports = driversRouter;
