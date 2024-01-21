const { Router } = require("express");
const getDrivers = require("../handler/getDriverHandlers.js");
const getDriverForename = require("../handler/getDriverForenameHandler.js");
const getDriverId = require("../handler/getDriverIdHandler.js");
const postDriver = require("../handler/postDriverHandler.js");

const driversRouter = Router();

driversRouter.get("/", getDrivers);
driversRouter.get("/name", getDriverForename);
driversRouter.get("/:id", getDriverId);
postsRouter.post("/", postDriver);

module.exports = driversRouter;
