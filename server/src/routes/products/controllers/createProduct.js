const db = require("../models");
const Product = db.products;

const createProduct = async (request, response) => {
  try {
    const product = request.body;

    const newProduct = new Product(product);
    const productToSave = await newProduct.save();

    response.status(200).send({
      status: "success",
      product: productToSave
    });
  } catch (error) {
    response.status(500).send({
      status: "error",
      message: error.message || "some error occurred while creating the product"
    });
  }
};

module.exports = createProduct;
