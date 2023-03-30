import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";
import { useSelector } from "react-redux";

const Header = () => {
  const orderList = useSelector((state) => state.cart.cartList);
  // const [modalOpen, setModalOpen] = useState(false);
  const modalOpen = useSelector((state) => state.ui.isModal);
  console.log(modalOpen);

  return (
    <>
      <header className={classes.Header}>
        <h1>ReactMeals</h1>
        {modalOpen && <Cart key={orderList.id} />}
        <CartButton>Your Cart</CartButton>
      </header>
      <div className={classes.header_main_image}>
        <img className={classes.header_image} src={headerImage} alt="" />
      </div>
    </>
  );
};

export default Header;
