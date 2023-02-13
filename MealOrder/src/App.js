import React, { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FoodList from "./components/FoodList/FoodList";

const originFoodList = [
  {
    title: "Sushi",
    disc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    title: "Schnitzel",
    disc: "A german specialty!",
    price: 16.5,
  },
  {
    title: "Barbecue Burger",
    disc: "American, raw, meaty",
    price: 12.99,
  },
  {
    title: "Green Bowl",
    disc: "Healthy...and green...",
    price: 18.99,
  },
];
function App() {
  const [foodList, setFoodList] = useState(originFoodList);
  const foodListHandler = (newData) => {
    setFoodList((prev) => {
      return [...prev, newData];
    });
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <FoodList foodList={foodList}></FoodList>
    </>
  );
}

export default App;
