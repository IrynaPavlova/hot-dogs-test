import React, { Component } from "react";
import styles from "./editForm.module.css";
import { deleteProduct, updateProduct } from "../../redux/operations";
import { connect } from "react-redux";

class EditForm extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    description: this.props.item.description,
    price: this.props.item.price,
    image: this.props.item.image
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = async e => {
    e.preventDefault();
    await this.props.deleteProduct(this.state.id);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id, name, description, price, image } = this.state;
    if (name === "" || description === "" || price === null || image === "") {
      return;
    }

    await this.props.updateProduct(
      {
        id: id,
        name: name,
        description: description,
        price: price,
        image: image
      },
      id
    );
    this.props.handleChangeEditForm();
  };
  render() {
    const { name, description, price, image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={image}
          name="image"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          min="1"
          value={price}
          name="price"
          onChange={this.handleChange}
        />
        <textarea
          value={description}
          name="description"
          onChange={this.handleChange}
        />

        <button className={styles.editForm_btn} type="submit">
          Update
        </button>
        <button
          type="reset"
          className={styles.editForm_btn}
          onClick={this.handleDelete}
        >
          Delete
        </button>
        <button
          className={styles.editForm_btn}
          type="reset"
          onClick={this.props.handleChangeEditForm}
        >
          Cancel
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  deleteProduct,
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
