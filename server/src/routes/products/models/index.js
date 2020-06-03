const Sequelize = require("sequelize");
const model = require("./productModel.js");

const sequelize = new Sequelize({
  database: "hotdogs",
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: "localhost",
  dialect: "postgres",
  port: 5432
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = model(sequelize, Sequelize);

module.exports = db;
