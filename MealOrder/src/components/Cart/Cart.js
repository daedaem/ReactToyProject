import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
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
  }, [props.orderList]);
  return (
    <Modal>
      <div className={classes.cart_backdrop}>
        <Card className={classes.cart_total_frame}>
          <div className={classes.cart_frame}>
            <ul className={classes.cart_list_frame}>
              {props.orderList.length > 0 ? (
                props.orderList.map((el) => {
                  return (
                    <li className={classes.cart_list_item_frame} key={el.id}>
                      <h1 className={classes.cart_title}>{el.title}</h1>
                      <div className={classes.cart_list_item_amount_button}>
                        <div className={classes.cart_list_item_price_amount}>
                          <p className={classes.cart_list_item_price}>
                            ${el.price}
                          </p>
                          <div className={classes.cart_item_amount}>
                            x {el.amount}
                          </div>
                        </div>
                        <div>
                          <Button className={classes.cart_item_amount_buttons}>
                            -
                          </Button>
                          <Button className={classes.cart_item_amount_buttons}>
                            +
                          </Button>
                        </div>
                      </div>
                    </li>
                  );
                })
              ) : (
                <div>없습니다.</div>
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
            <Button
              className={classes.cart_button_order}
              onClick={() => console.log("ordering")}
            >
              Order
            </Button>
          </div>
        </Card>
      </div>
    </Modal>
  );
};
export default Cart;
