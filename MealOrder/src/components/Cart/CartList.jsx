import { useState } from "react";
import Button from "../UI/Button";
import classes from "./CartList.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartList = ({ orderList }) => {
  const dispatch = useDispatch();

  const increaseAmountHandler = (e) => {
    dispatch(cartActions.addItem({ ...orderList, amount: 1 }));
  };
  const decreaseAmountHandler = () => {
    dispatch(cartActions.removeItem(orderList));
  };

  return (
    <li className={classes.cart_list_item_frame}>
      <h1 className={classes.cart_title}>{orderList.title}</h1>
      <div className={classes.cart_list_item_amount_button}>
        <div className={classes.cart_list_item_price_amount}>
          <p className={classes.cart_list_item_price}>${orderList.price}</p>
          <div className={classes.cart_item_amount}>x {orderList.amount}</div>
        </div>
        <div>
          <Button
            className={classes.cart_item_amount_buttons}
            onClick={decreaseAmountHandler}
          >
            -
          </Button>
          <Button
            className={classes.cart_item_amount_buttons}
            onClick={increaseAmountHandler}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};
export default CartList;
