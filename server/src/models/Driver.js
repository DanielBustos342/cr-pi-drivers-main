// 📍 MODELO 1 | Drivers

// ID (deben ser distintos a los que vienen de la API). *
// Nombre. *
// Apellido. *
// Descripción. *
// Imagen. *
// Nacionalidad. *
// Fecha de Nacimiento. *

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Driver",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      forename: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "the forename is required",
          },
        },
      },
      surname: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "the surename is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "the description is required",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "../assets/f1-default.jpg",
      },
      nationality: {
        typr: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "the nationality is required",
          },
        },
      },
      birthdate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "the bithdate is required",
          },
        },
      },
    },
    { freezeTableName: true, Timetamps: false }
  );
};
