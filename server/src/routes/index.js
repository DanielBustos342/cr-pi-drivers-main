const { Router } = require("express");
const driversRouter = require("./driversRouter.js");

const router = Router();

router.use("/", driversRouter);

module.exports = router;
