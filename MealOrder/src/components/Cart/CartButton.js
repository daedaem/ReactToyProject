import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  return (
    <Button className={classes.modal_Button} onClick={props.onClick}>
      <div className={classes.cart_buttons}>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <p className={classes.cart_button_title}>Your Cart</p>
        <p className={classes.cart_button_amount}>{props.cartInfos}</p>
      </div>
    </Button>
  );
};
export default CartButton;
