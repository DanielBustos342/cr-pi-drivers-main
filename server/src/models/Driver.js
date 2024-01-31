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
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notnull: false,
          len: [4, 15],
          notEmpty: {
            msg: "the name is required",
          },
        },
      },
      lastname: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          len: [4, 15],
          notnull: false,
          notEmpty: {
            msg: "the Lastname is required",
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
        defaultValue:
          "https://i.pinimg.com/originals/e1/2c/9b/e12c9be3e3174b44dec94bf443d23f70.jpg",
        validate: {
          isUrl: true,
        },
      },
      nacionality: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notnull: false,
          notEmpty: {
            msg: "the nationality is required",
          },
        },
      },
      birthdate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notnull: false,
          notEmpty: {
            msg: "the bithdate is required",
          },
        },
      },
    },
    { freezeTableName: true, Timetamps: false }
  );
};
