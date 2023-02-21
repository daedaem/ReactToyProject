import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartList from "./CartList";
const calc = (props) => {
  let result = 0;
  props.orderList.map((el) => {
    result += el.amount * el.price;
  });
  return result.toFixed(2);
};
const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(() => calc(props));

  useEffect(() => {
    setTotalPrice(() => {
      return calc(props);
    });
  }, [props]);

  return (
    <Modal>
      <div className={classes.cart_backdrop}>
        <Card className={classes.cart_total_frame}>
          <div className={classes.cart_frame}>
            <ul className={classes.cart_list_frame}>
              {props.orderList.length > 0 ? (
                props.orderList.map((item) => {
                  return (
                    <CartList
                      key={item.id}
                      cartAmountHandler={props.cartAmountHandler}
                      orderList={item}
                    ></CartList>
                  );
                })
              ) : (
                <ul className={classes.cart_list_frame}>
                  <h1 className={classes.cart_list_noitem}>
                    There is no Item.
                  </h1>
                </ul>
              )}
            </ul>
          </div>
          <div className={classes.cart_amount_title}>
            <h2>Total Amount</h2>
            <h2>${totalPrice}</h2>
          </div>
          <div className={classes.cart_button_frame}>
            <Button
              className={classes.cart_button_close}
              onClick={props.onClose}
            >
              Close
            </Button>
            {props.orderList.length > 0 && (
              <Button
                className={classes.cart_button_order}
                onClick={() => console.log("ordering")}
              >
                Order
              </Button>
            )}
          </div>
        </Card>
      </div>
    </Modal>
  );
};
export default Cart;
