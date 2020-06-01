import React, { Component } from "react";
import styles from "./productsList.module.css";
import ProductsListItem from "../productsListItem/ProductsListItem";
import PropTypes from "prop-types";

class ProductsList extends Component {
  state = {};

  render() {
    return (
      <div className={styles.products_wrapper}>
        <h2 className={styles.products_title}>All hot-dogs</h2>
        <ul className={styles.products_list}>
          {this.props.products &&
            this.props.products
              .sort((prev, next) => prev.id - next.id)
              .map(item => <ProductsListItem key={item.id} item={item} />)}
        </ul>
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsList;
