//const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require("./routes/products/productRoute");
const db = require("./routes/products/models");
const app = express();

const errorHandler = (error, request, response, next) => {
  response.status(500).send("Error:" + error.stack);
};

const startServer = port => {
  app
    .use(express.static("public"))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.json())
    .use(cors())
    //.use(morgan("combined"))
    .use("/products", productRoute)
    .use(errorHandler);

  db.sequelize.authenticate();
  db.sequelize.sync().then(result => {
    //console.log(result);
    app.listen(port, error => {
      if (error) {
        return console.log("Something bad happened", error);
      }
      console.log("Server listening on port", port);
    });
  });
};

module.exports = startServer;
