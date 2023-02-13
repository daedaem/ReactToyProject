import Card from "../UI/Card";
import FoodListItem from "./FoodListItem";
import classes from "./FoodList.module.css";
const FoodList = (props) => {
  return (
    <Card className={classes.food_list_frame}>
      {props.foodList.map((el, idx) => (
        <FoodListItem key={idx} foodItem={el}></FoodListItem>
      ))}
    </Card>
  );
};
export default FoodList;
