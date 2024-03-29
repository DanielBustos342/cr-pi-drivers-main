const { Router } = require("express");
const driverRoutes = require("./driverRoutes");
const teamRoutes = require("./teamRouter");

const router = Router();

router.use("/drivers", driverRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
