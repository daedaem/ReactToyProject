import { Fragment } from "react";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
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
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};
export default Modal;
