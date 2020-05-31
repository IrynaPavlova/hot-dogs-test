import React, { Component } from "react";
import styles from "./header.module.css";
import logo from "../../assets/img/logo.png";
import CreateForm from "../createForm/CreateForm";

class Header extends Component {
  state = {
    isOpenModal: false
  };

  handleChangeModal = e => {
    this.setState(state => ({ isOpenModal: !state.isOpenModal }));
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_logo_wrapper}>
          <img className={styles.header_logo} src={logo} alt="Logo" />
          <div className={styles.header_crud}>
            <h1 className={styles.header_crud_text}>Crud</h1>
          </div>
        </div>
        <button className={styles.header_btn} onClick={this.handleChangeModal}>
          Add hot-dog
        </button>
        {this.state.isOpenModal && (
          <div className={styles.overlay}>
            <CreateForm
              isOpen={this.handleChangeModal}
              products={this.props.products}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Header;
