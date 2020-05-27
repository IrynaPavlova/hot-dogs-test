const Sequelize = require("sequelize");
const model = require("./productModel.js");

const sequelize = new Sequelize({
  database: "hotdogs",
  username: "pavlova",
  password: "qwerty",
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = model(sequelize, Sequelize);

module.exports = db;
