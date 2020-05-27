const db = require("../models");
const Product = db.products;

const getAllProducts = async (request, response) => {
  try {
    const allProducts = await Product.findAll();
    response.status(200).send({
      status: "success",
      products: allProducts
    });
  } catch (error) {
    response.status(500).send({
      status: "error",
      message: error.message || "some error occurred while retrieving products"
    });
  }
};

module.exports = getAllProducts;
