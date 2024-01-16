const { Driver } = require("../db.js");

const createDriver = async ({
  firstname,
  lastname,
  detail,
  nationality,
  date_of_birth,
  teams,
}) => {
  const newDriver = await Driver.create({
    firstname,
    lastname,
    detail,
    nationality,
    date_of_birth,
  });

  newDriver.addTeams(teams); //! es para vincular la tabla de driver con team (desectructura)

  return newDriver;
};

module.exports = createDriver;
