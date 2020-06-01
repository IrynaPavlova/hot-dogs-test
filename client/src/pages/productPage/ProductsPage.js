import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, postProduct } from "../../redux/operations";
import Header from "../../components/header/Header";
import ProductsList from "../../components/productsList/ProductsList";
import styles from "./productPage.module.css";

class ProductsPage extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getProducts();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products.length !== this.props.products.value.length) {
      //this.props.getProducts();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          products={this.props.products.value}
          postProduct={this.props.postProduct}
        />
        <ProductsList products={this.props.products.value} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getProducts,
  postProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
