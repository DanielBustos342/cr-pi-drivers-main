// MODELO 2 | Teams

// ID. *
// Nombre. *

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The name is required",
          },
        },
      },
    },
    { freezeTableName: true, Timetamps: false }
  );
};
