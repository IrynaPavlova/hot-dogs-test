import React, { Component } from "react";
import styles from "./createForm.module.css";
import services from "../../services/services";
import { Field, reduxForm } from "redux-form";

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
    await services.createProduct({
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

  render() {
    // const { handleSubmit, reset } = this.props;
    // const submit = values => console.log("values", values);
    return (
      <div className={styles.form_wrapper}>
        <p className={styles.form_text}>Add new hot-dog</p>
        <form onSubmit={this.handleSubmit}>
          <Field
            type="text"
            component="input"
            placeholder="Name"
            name="name"
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
