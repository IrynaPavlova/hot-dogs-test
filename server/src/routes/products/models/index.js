const Sequelize = require("sequelize");
const model = require("./productModel.js");

const sequelize = new Sequelize({
  database: "hotdogs",
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  logging: true,
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = model(sequelize, Sequelize);

module.exports = db;
