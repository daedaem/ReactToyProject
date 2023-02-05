import classes from "./Modal.module.css";
import Card from "./Card";
const Modal = (props) => {
  return (
    <Card className={classes.modal_backdrop}>
      <div className={classes.modal_frame}>하이</div>
      <button onClick={props.onClose}>닫기</button>
    </Card>
  );
};
export default Modal;
