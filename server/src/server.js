const express = require("express");
const server = express();
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");




server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
