import React, { Component } from "react";
import styles from "./createForm.module.css";
import { Field, reduxForm } from "redux-form";
import Input from "../input/Input";

class CreateForm extends Component {
  state = {
    name: "",
    description: "",
    price: null,
    image: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, description, price, image } = this.state;
    if (name === "" || description === "" || price === null || image === "") {
      return;
    }
    await this.props.postProduct({
      name: name,
      description: description,
      price: price,
      image: image
    });

    this.clearForm();
    this.props.isOpen();
  };

  clearForm = () => {
    this.setState({ name: "", description: "", price: null, image: "" });
  };

  correctInput = input => {
    const names = this.props.products.map(elem => elem.name);
    return names.includes(input) ? "Such name already exists" : undefined;
  };

  render() {
    return (
      <div className={styles.form_wrapper}>
        <p className={styles.form_text}>Add new hot-dog</p>
        <form onSubmit={this.handleSubmit}>
          <Field
            type="text"
            component={Input}
            placeholder="Name"
            name="name"
            validate={[this.correctInput]}
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
          />
          <input
            type="number"
            min="1"
            placeholder="Price"
            name="price"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Image"
            name="image"
            onChange={this.handleChange}
          />
          <div className={styles.btn_wrapper}>
            <button
              className={styles.form_btn}
              type="reset"
              onClick={() => {
                this.props.isOpen();
              }}
            >
              No Thanks
            </button>
            <button className={styles.form_btn} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CreateForm = reduxForm({
  form: "create"
})(CreateForm);

export default CreateForm;
