const db = require("../models");
const Product = db.products;

const deleteProduct = async (request, response) => {
  try {
    const id = request.params.id;

    await Product.destroy({
      where: { id: id }
    }).then(num => {
      if (num == 1) {
        response.status(200).send({
          status: "success",
          message: "product was deleted successfully"
        });
      } else {
        response.status(400).send({
          status: "error",
          message: `cannot delete product with id:${id}`
        });
      }
    });
  } catch (error) {
    response.status(500).send({
      status: "error",
      message: error.message || `could not delete product with id:${id}`
    });
  }
};

module.exports = deleteProduct;
