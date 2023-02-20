import { useState } from "react";
import Button from "../UI/Button";
import classes from "./CartList.module.css";
const CartList = (props) => {
  const [selectItem, setSelectItem] = useState(props.orderList);
  const [itemAmount, setItemAmount] = useState(0);

  const changeAmountHandler = () => {
    // e.preventDefault();
    // console.log(e);
    console.log(itemAmount);
    return props.orderListHandler({ ...selectItem, amount: itemAmount });
  };
  const increaseAmountHandler = (e) => {
    setItemAmount(1);
    changeAmountHandler();
  };
  const decreaseAmountHandler = (e) => {
    console.log(e);
    setItemAmount(-1);
    changeAmountHandler();
  };
  return (
    <li className={classes.cart_list_item_frame}>
      <h1 className={classes.cart_title}>{props.orderList.title}</h1>
      <div className={classes.cart_list_item_amount_button}>
        <div className={classes.cart_list_item_price_amount}>
          <p className={classes.cart_list_item_price}>
            ${props.orderList.price}
          </p>
          <div className={classes.cart_item_amount}>
            x {props.orderList.amount}
          </div>
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
