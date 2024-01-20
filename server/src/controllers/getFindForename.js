const { Driver } = require("../db.js");

module.exports = async (query) => {
  const drivers = await Driver.findAll({ where: query });
  return drivers;
};
