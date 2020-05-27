const db = require("../models");
const Product = db.products;

const updateProduct = async (request, response) => {
  try {
    const product = request.body;
    const id = request.params.id;

    await Product.update(product, {
      where: { id: id }
    }).then(num => {
      if (num == 1) {
        response.send({
          status: "success",
          message: "product was updated successfully"
        });
      } else {
        response.status(400).send({
          status: "error",
          message: `cannot update product with id:${id}`
        });
      }
    });
  } catch (error) {
    response.status(500).send({
      status: "error",
      message: error.message || `error updating product with id:${id}`
    });
  }
};

module.exports = updateProduct;
