import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CheckOut from "./CheckOut";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const orderList = useSelector((state) => state.cart.cartList);
  const calc = () => {
    let result = 0;
    orderList.map((el) => (result += el.amount * el.price));
    return result.toFixed(2);
  };

  const [totalPrice, setTotalPrice] = useState(() => calc(props));
  const [showOrderSheet, setShowOrderSheet] = useState(false);
  const dispatch = useDispatch();

  const orderSubmitHandler = async (formData) => {
    await fetch("https://meal-or-default-rtdb.firebaseio.com/orderList.json", {
      method: "POST",
      body: JSON.stringify({
        totalAmount: +orderList
          .reduce((init, el) => {
            return (init += el.amount * el.price);
          }, 0)
          .toFixed(2),
        orderedItems: orderList,
        user: formData,
      }),
    });
    dispatch(cartActions.clearItem());
    dispatch(uiActions.changeModal());
    alert("ordered!");
  };
  const changeModalHandler = () => {
    dispatch(uiActions.changeModal());
  };
  const orderHandler = () => {
    setShowOrderSheet(() => true);
  };
  const orderCloseHandler = () => {
    setShowOrderSheet(() => false);
  };
  useEffect(() => {
    setTotalPrice(() => {
      return calc(props);
    });
  }, [props]);

  const orderButtons = (
    <div className={classes.cart_button_frame}>
      <Button
        className={classes.cart_button_close}
        onClick={changeModalHandler}
      >
        Close
      </Button>
      {orderList.length > 0 && (
        <Button className={classes.cart_button_order} onClick={orderHandler}>
          Order
        </Button>
      )}
    </div>
  );
  return (
    <Modal onClose={changeModalHandler}>
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
        {!showOrderSheet && orderButtons}
        {showOrderSheet && (
          <CheckOut
            onClose={changeModalHandler}
            onSubmit={orderSubmitHandler}
          />
        )}
      </Card>
    </Modal>
  );
};
export default Cart;
