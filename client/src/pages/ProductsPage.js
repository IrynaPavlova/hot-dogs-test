import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/operations";
import Header from "../components/header/Header";
import ProductsList from "../components/productsList/ProductsList";

class ProductsPage extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getProducts();
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.products.value.length !== this.props.products.value.length) {
  //       this.props.getProducts();
  //     }
  //   }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.products !== nextState.products;
  // }

  render() {
    console.log(
      "this.props.products",
      this.props.products.value && this.props.products.value.length
    );
    return (
      <>
        <Header products={this.props.products.value} />
        <ProductsList products={this.props.products.value} />
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
