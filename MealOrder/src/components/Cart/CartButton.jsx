import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const calcAmount = (data) => {
  let result = 0;
  if (data) {
    data.map((el) => {
      result += el.amount;
    });
  }

  return result;
};
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartAmount = useSelector((state) => calcAmount(state.cart.cartList));
  const changeModalHandler = () => {
    dispatch(uiActions.changeModal());
  };
  return (
    <Button className={classes.modal_Button} onClick={changeModalHandler}>
      <div className={classes.cart_buttons}>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <p className={classes.cart_button_title}>Your Cart</p>
        <p className={classes.cart_button_amount}>{cartAmount}</p>
      </div>
    </Button>
  );
};
export default CartButton;
