import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts, postProduct } from "../../redux/operations";
import Header from "../../components/header/Header";
import ProductsList from "../../components/productsList/ProductsList";
import styles from "./productPage.module.css";

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

// class ProductsPage extends Component {
//   state = {};

//   componentDidMount = () => {
//     this.props.getProducts();
//   };

//   componentDidUpdate(prevProps) {
//     if (this.props.products.length !== prevProps.products.length) {
//       this.props.getProducts();
//     }
//   }

//   render() {
//     return (
//       <div className={styles.container}>
//         <Header
//           products={this.props.products}
//           postProduct={this.props.postProduct}
//         />
//         <ProductsList products={this.props.products} />
//       </div>
//     );
//   }
// }

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getProducts,
  postProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
