// 📍 POST | /drivers
// Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).

const Sequelize = require("sequelize");
const { Driver, Team } = require("../db.js");

module.exports = async (
  forename,
  surename,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  try {
    const newDriver = await Driver.create({
      forename,
      surename,
      description,
      image,
      nationality,
      dob,
    });

    const addTeams = await Team.findAll({
      where: {
        forename: {
          [Sequelize.Op.in]: teams,
        },
      },
    });

    await newDriver.addTeams(addTeams);

    const driverRealation = await Driver.findOne({
      where: {
        id: newDriver.id,
      },
      include: [
        {
          model: Team,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return driverRealation;
  } catch (error) {
    console.error("Error al crear driver:", error);
  }
};
