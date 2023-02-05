import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Header.module.css";
import Button from "./Button";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <div className={classes.Header}>
      <h1>ReactMeals</h1>
      {modalOpen && <Modal onClose={closeModal} onOpen={openModal} />}
      {!modalOpen && <Button onClick={openModal}>Your Cart</Button>}
    </div>
  );
};

export default Header;
