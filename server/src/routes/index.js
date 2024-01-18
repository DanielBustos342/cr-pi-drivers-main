const { Router } = require("express");
const {
  getAllDrivers,
  getDriverById,
} = require("../handler/driverHandlers.js");
const router = Router();

router.use("/drivers", getAllDrivers);
router.use("/driver:id", getDriverById);

module.exports = router;
