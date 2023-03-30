import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../../store/cart-slice";

const Cart = (props) => {
  const orderList = useSelector((state) => state.cartList);
  const calc = (props) => {
    let result = 0;
    orderList.map((el) => {
      result += el.amount * el.price;
    });
    return result.toFixed(2);
  };

  const [totalPrice, setTotalPrice] = useState(() => calc(props));
  const dispatch = useDispatch();
  const orderSubmitHandler = async () => {
    await fetch("https://meal-or-default-rtdb.firebaseio.com/orderList.json", {
      method: "POST",
      body: JSON.stringify({
        ...orderList,
      }),
    });
    dispatch(cartActions.clearItem());
    alert("ordered!");
  };

  useEffect(() => {
    setTotalPrice(() => {
      return calc(props);
    });
  }, [props]);

  return (
    <Modal onClose={props.onClose}>
      <Card className={classes.cart_total_frame}>
        <div className={classes.cart_frame}>
          <ul className={classes.cart_list_frame}>
            {orderList.length > 0 ? (
              orderList.map((item) => {
                return <CartList key={item.id} orderList={item}></CartList>;
              })
            ) : (
              <ul className={classes.cart_list_frame}>
                <h1 className={classes.cart_list_noitem}>There is no Item.</h1>
              </ul>
            )}
          </ul>
        </div>
        <div className={classes.cart_amount_title}>
          <h2>Total Amount</h2>
          <h2>${totalPrice}</h2>
        </div>
        <div className={classes.cart_button_frame}>
          <Button className={classes.cart_button_close} onClick={props.onClose}>
            Close
          </Button>
          {orderList.length > 0 && (
            <Button
              className={classes.cart_button_order}
              onClick={orderSubmitHandler}
            >
              Order
            </Button>
          )}
        </div>
      </Card>
    </Modal>
  );
};
export default Cart;
