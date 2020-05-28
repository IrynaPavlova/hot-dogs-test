import React, { Component } from "react";
import styles from "./productsList.module.css";
import services from "../../services/services";

class ProductsList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    services.getAllProducts().then(data =>
      this.setState({
        products: data.data.products
      })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.products_wrapper}>
        <h2 className={styles.products_title}>All hot-dogs</h2>
        <ul className={styles.products_list}>
          {products.map(item => (
            <li className={styles.products_list_item} key={item.id}>
              <img
                className={styles.products_list_item_img}
                src={item.image}
                alt="hot-dog"
              />
              <h3 className={styles.products_list_item_title}>{item.name}</h3>
              <p className={styles.products_list_item_price}>{item.price} $</p>
              <p className={styles.products_list_item_description}>
                {item.description}
              </p>
              <button className={styles.products_list_item_btn}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
