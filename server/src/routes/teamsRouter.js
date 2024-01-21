const { Router } = require("express");
const getTeams = require("../handler/getTeamsHandlers.js");

const postsRouter = Router();

driversRouter.get("/", getTeams);

module.exports = postsRouter;
