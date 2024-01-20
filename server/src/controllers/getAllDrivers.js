const db = require("../../api/db.json");

const getAllDrivers = async () => {
  return db;
};

module.exports = getAllDrivers;
