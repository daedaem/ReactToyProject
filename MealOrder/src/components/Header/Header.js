import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";
const calcAmount = (data) => {
  let result = 0;
  if (data) {
    data.map((el) => {
      result += el.amount;
    });
  }

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
  }, [props.orderList]);

  return (
    <>
      <header className={classes.Header}>
        <h1>ReactMeals</h1>
        {modalOpen && (
          <Cart
            key={props.orderList.id}
            orderList={props.orderList}
            onClose={closeModal}
            onOpen={openModal}
            // cartAmountHandler={props.cartAmountHandler}
          />
        )}
        <CartButton onClick={openModal} cartInfos={cartInfos}>
          Your Cart
        </CartButton>
      </header>
      <div className={classes.header_main_image}>
        <img className={classes.header_image} src={headerImage} alt="" />
      </div>
    </>
  );
};

export default Header;
