const { Driver } = require("../db.js");

const findDriverById = async (id) => {
  const driver = await Driver.findByPk(id);
  if(!driver) throw Error("No existe");
  return driver;
};

module.exports = findDriverById;
