import { Fragment } from "react";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "./../../store/ui-slice";

const Backdrop = () => {
  const dispatch = useDispatch();
  const changeModalHandler = () => {
    dispatch(uiActions.changeModal());
  };
  return <div className={classes.backdrop} onClick={changeModalHandler}></div>;
};
const ModalOverlay = (props) => {
  return (
    <section className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </section>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};
export default Modal;
