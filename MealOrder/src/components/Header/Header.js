import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import Button from "../UI/Button";

const calcAmount = (props) => {
  let result = 0;
  props.map((el) => (result += el.amount));
  return result;
};
const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cartInfos, setCartInfos] = useState(() => calcAmount(props.orderList));
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    setCartInfos(calcAmount(props.orderList));
    //   if (props.orderList.length > 0) {
    //     console.log(props.order);
    //     // setCartInfos(() => {});
  }, [props.orderList]);

  return (
    <div className={classes.Header}>
      <h1>ReactMeals</h1>
      {modalOpen && (
        <Cart
          key={props.orderList.id}
          orderList={props.orderList}
          onClose={closeModal}
          onOpen={openModal}
        />
      )}
      <Button className={classes.modal_Button} onClick={openModal}>
        <div className={classes.cart_buttons}>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <p className={classes.cart_button_title}>Your Cart</p>
          <p className={classes.cart_button_amount}>{cartInfos}</p>
        </div>
      </Button>
    </div>
  );
};

export default Header;
