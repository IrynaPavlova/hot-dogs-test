const startServer = require("./src/server");
const { port } = require("./config");
require("dotenv").config();
//console.log("process.env", process.env);

startServer(port);
