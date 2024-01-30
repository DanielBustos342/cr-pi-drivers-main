require("dotenv").config();
const { Sequelize } = require("sequelize");
const functionDriver = require("./models/Driver");
const functionTeam = require("./models/Team");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD } = process.env;
// console.log({ DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD });

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BDD}`,
  {
    logging: false,
    native: false,
    alter: false,
  }
);

functionDriver(sequelize);
functionTeam(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Driver, Team } = sequelize.models;
Driver.belongsToMany(Team, { through: "DriverTeam", timestamps: false });
Team.belongsToMany(Driver, { through: "DriverTeam", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
