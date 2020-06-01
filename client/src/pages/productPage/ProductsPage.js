import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts, postProduct } from "../../redux/operations";
import Header from "../../components/header/Header";
import ProductsList from "../../components/productsList/ProductsList";
import styles from "./productPage.module.css";
import PropTypes from "prop-types";

const ProductsPage = ({ products, postProduct, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts, products.length]);
  return (
    <div className={styles.container}>
      <Header products={products} postProduct={postProduct} />
      <ProductsList products={products} />
    </div>
  );
};

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  postProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getProducts,
  postProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
