module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.INTEGER, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: false }
  });
  return Product;
};

