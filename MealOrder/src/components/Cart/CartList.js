import { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "./CartList.module.css";
const CartList = (props) => {
  const [selectItem, setSelectItem] = useState(() => props.orderList);
  const [cartItemAmount, setCartItemAmount] = useState(
    () => props.orderList.amount
  );

  const changeAmountHandler = (e) => {
    e.preventDefault();
    return props.cartAmountHandler({
      ...selectItem,
      amount: cartItemAmount,
    });
  };

  // const changeAmountHandler = (action) => {
  //   // e.preventDefault();
  //   // console.log(e);
  //   switch (action) {
  //     case "+":
  //       setCartItemAmount((prev) => {
  //         return prev + 1;
  //       });
  //       return props.cartAmountHandler({
  //         ...selectItem,
  //         amount: cartItemAmount,
  //       });
  //     case "-":
  //       setCartItemAmount((prev) => {
  //         return prev - 1;
  //       });
  //       return props.cartAmountHandler({
  //         ...selectItem,
  //         amount: cartItemAmount,
  //       });
  //     default:
  //       break;
  //   }
  // };

  const increaseAmountHandler = (e) => {
    setCartItemAmount((prev) => {
      return prev + 1;
    });
    // changeAmountHandler("+");
  };
  const decreaseAmountHandler = (e) => {
    setCartItemAmount((prev) => {
      return prev - 1;
    });
  };
  // useEffect(() => {
  //   setCartItemAmount(() => {
  //     return props.orderList.amount;
  //   });
  // }, [cartItemAmount]);
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
        <form type="submit" onSubmit={changeAmountHandler}>
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
        </form>
      </div>
    </li>
  );
};
export default CartList;
