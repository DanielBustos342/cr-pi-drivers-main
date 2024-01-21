const { Router } = require("express");
const postDriverHandler = require("../handler/postDriverHandler.js");

const postsRouter = Router();

postsRouter.post("/", postDriverHandler);

module.exports = postsRouter;
