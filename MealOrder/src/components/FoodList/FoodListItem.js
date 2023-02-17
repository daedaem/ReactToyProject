import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./FoodListItem.module.css";
const FoodListItem = (props) => {
  const [selectItem, setSelectItem] = useState(props.foodItem);
  const [itemAmount, setItemAmount] = useState(1);

  const addItemHandler = (e) => {
    e.preventDefault();
    return props.orderListHandler({ ...selectItem, amount: itemAmount });
  };
  const selectItemHandler = (e) => {
    console.log(e.target.value);
    setItemAmount(+e.target.value);
  };
  return (
    <>
      <article className={classes.food_list_item_frame}>
        <div>
          <h1 className={classes.food_list_item_title}>
            {props.foodItem.title}
          </h1>
          <em className={classes.food_list_item_disc}>{props.foodItem.disc}</em>
          <p className={classes.price}>${props.foodItem.price}</p>
        </div>
        <form
          className={classes.order_box}
          type="submit"
          onSubmit={addItemHandler}
        >
          <div className={classes.amount_box}>
            <p>Amount</p>
            <input
              type="number"
              defaultValue={itemAmount}
              min={1}
              max={5}
              onChange={selectItemHandler}
              className={classes.amount_box_input}
            />
          </div>
          <Button className={classes.food_list_item_button}>+Add</Button>
        </form>
      </article>
    </>
  );
};

export default FoodListItem;
