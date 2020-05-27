const db = require("../models");
const Product = db.products;

const getProductById = async (request, response) => {
  try {
    const id = request.params.id;
    const findProduct = await Product.findByPk(id);

    response.status(200).send({
      status: "success",
      product: findProduct
    });
  } catch (error) {
    response.status(500).send({
      status: "error",
      message: error.message || `error retrieving product with id:${id}`
    });
  }
};

module.exports = getProductById;
