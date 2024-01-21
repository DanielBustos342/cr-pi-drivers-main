// GET | /drivers
// Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
// IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

const db = require("../db");

const getAllDrivers = async () => {
  return db;
};

module.exports = getAllDrivers;
