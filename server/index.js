const startServer = require("./src/server");
const { port } = require("./config");
require("dotenv").config();
console.log("process.env.port", process.env.PORT);

startServer(port);
