const { Driver } = require("../db.js");

const deletedDriver = async (id) => {
  const driver = await Driver.findByPk(id);
  const aux = { ...driver }; //para tener un respaldo si borran algo
  await driver.destroy();
  return aux;
};

module.exports = deletedDriver;
