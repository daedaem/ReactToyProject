import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <section className={`${classes.Modal} + ${props.className}`}>
      {props.children}
    </section>
  );
};
export default Modal;
