import React, { Component } from "react";
import styles from "./productsList.module.css";
import services from "../../services/services";
import ProductsListItem from "../productsListItem/ProductsListItem";

class ProductsList extends Component {
  state = {
    products: []
  };

  getProducts() {
    services.getAllProducts().then(data =>
      this.setState({
        products: data.data.products
      })
    );
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      //this.getProducts();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.products !== nextState.products;
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.products_wrapper}>
        <h2 className={styles.products_title}>All hot-dogs</h2>
        <ul className={styles.products_list}>
          {products.map(item => (
            <ProductsListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
