import React, { Component } from "react";
import styles from "./productsListItem.module.css";
import EditForm from "../editForm/EditForm";

class ProductsListItem extends Component {
  state = {
    isOpenEditForm: false
  };

  handleChangeEditForm = () => {
    this.setState(state => ({ isOpenEditForm: !state.isOpenEditForm }));
  };

  render() {
    const { image, name, price, description } = this.props.item;
    return (
      <li className={styles.products_list_item}>
        <img
          className={styles.products_list_item_img}
          src={image}
          alt="hot-dog"
        />
        {this.state.isOpenEditForm ? (
          <EditForm
            handleChangeEditForm={this.handleChangeEditForm}
            item={this.props.item}
          />
        ) : (
          <>
            <h3 className={styles.products_list_item_title}>{name}</h3>
            <p className={styles.products_list_item_price}>{price} $</p>
            <p className={styles.products_list_item_description}>
              {description}
            </p>
            <button
              className={styles.products_list_item_btn}
              onClick={this.handleChangeEditForm}
            >
              Edit
            </button>
          </>
        )}
      </li>
    );
  }
}

export default ProductsListItem;
