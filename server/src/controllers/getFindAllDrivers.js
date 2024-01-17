const { Driver } = require("../db.js");

const getFindAllDrivers = async () => {
  const drivers = await Driver.findAll();
  return drivers;
};

module.exports = getFindAllDrivers;
