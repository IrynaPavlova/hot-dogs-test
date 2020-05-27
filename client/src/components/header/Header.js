import React, { Component } from "react";
import styles from "./header.module.css";
import logo from "../../assets/img/logo.png";
import CreateHotDogForm from "../createHotDogForm/CreateHotDogForm";

class Header extends Component {
  state = {
    isOpenModal: false
  };

  handleChangeModal = () => {
    this.setState(state => ({ isOpenModal: !state.isOpenModal }));
  };
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_logo_wrapper}>
          <img className={styles.header_logo} src={logo} alt="Logo" />
          <div className={styles.header_crud}>
            <p className={styles.header_crud_text}>Crud</p>
          </div>
        </div>
        <button className={styles.header_btn} onClick={this.handleChangeModal}>
          Add hot-dog
        </button>
        {this.state.isOpenModal && (
          <div className={styles.overlay}>
            <CreateHotDogForm isOpen={this.handleChangeModal} />
          </div>
        )}
      </div>
    );
  }
}

export default Header;
