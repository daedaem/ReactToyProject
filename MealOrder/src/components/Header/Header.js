import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import CartButton from "../Cart/CartButton";
import { useSelector } from "react-redux";

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
  const orderList = useSelector((state) => state.cartList);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartInfos, setCartInfos] = useState(() => calcAmount(orderList));

  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    setCartInfos(calcAmount(orderList));
  }, [orderList]);

  return (
    <>
      <header className={classes.Header}>
        <h1>ReactMeals</h1>
        {modalOpen && (
          <Cart key={orderList.id} onClose={closeModal} onOpen={openModal} />
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
