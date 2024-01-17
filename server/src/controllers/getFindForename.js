const { Driver } = require("../db.js");

const createDriver = async (query) => {
  const drivers = await Driver.findAll({ where: query });
  return drivers;
};

module.exports = createDriver;
