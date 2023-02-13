import React from "react";
import Button from "../UI/Button";
import classes from "./FoodListItem.module.css";
const FoodListItem = (props) => {
  //   console.log(props);
  return (
    <>
      <div className={classes.food_list_item_frame}>
        <div>
          <h1 className={classes.food_list_item_title}>
            {props.foodItem.title}
          </h1>
          <p className={classes.food_list_item_disc}>{props.foodItem.disc}</p>
          <p className={classes.price}>${props.foodItem.price}</p>
        </div>
        <div className={classes.order_box}>
          <div className={classes.amount_box}>
            <p>Amount</p>
            <input
              type="number"
              min="1"
              max="10"
              className={classes.amount_box_input}
            />
          </div>
          <Button className={classes.food_list_item_button}>+Add</Button>
        </div>
      </div>
    </>
  );
};

export default FoodListItem;
