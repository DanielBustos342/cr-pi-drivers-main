const { query } = require("express");
const { Driver, Team } = require("../db.js");

const getFindAllDrivers = async (query) => {
  const drivers = await Driver.findAll({
    //? para filtrar con marcado
    where: query,
    //? filtrado especifico
    include: {
      //? solo pido que muestre el nombre del equipo
      model: Team,
      attributes: ["name"],
      //?saca la info innecesaria de la tabla intermedia
      through: {
        attributes: [],
      },
    },
  });
  return drivers;
};

module.exports = getFindAllDrivers;
