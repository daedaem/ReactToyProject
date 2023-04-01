import { useState, useEffect } from "react";
import Card from "../UI/Card";
import FoodListItem from "./FoodListItem";
import classes from "./FoodList.module.css";

const FoodList = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://meal-or-default-rtdb.firebaseio.com/originFoodList.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const resData = await res.json();

      setIsLoading(false);
      setFoodList(() => resData);
      return resData;
    };
    fetchData().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.FoodLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.FoodError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.food_list_frame}>
      <Card>
        {foodList.map((item, idx) => (
          <FoodListItem key={item.id} foodItem={item}></FoodListItem>
        ))}
      </Card>
    </section>
  );
};
export default FoodList;
