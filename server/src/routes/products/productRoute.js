const { Router } = require("express");
const getAllProducts = require("./controllers/getAllProducts");
const getProductById = require("./controllers/getProductById");
const createProduct = require("./controllers/createProduct");
const updateProduct = require("./controllers/updateProduct");
const deleteProduct = require("./controllers/deleteProduct");

const productRoute = Router();

productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);
productRoute.post("/", createProduct);
productRoute.put("/:id", updateProduct);
productRoute.delete("/:id", deleteProduct);

module.exports = productRoute;
