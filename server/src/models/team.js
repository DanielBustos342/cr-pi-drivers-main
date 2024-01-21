// MODELO 2 | Teams

// ID. *
// Nombre. *

const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Team",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
