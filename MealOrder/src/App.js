import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FoodList from "./components/FoodList/FoodList";

const originFoodList = [
  {
    id: 1,
    title: "Sushi",
    disc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    disc: "A german specialty!",
    price: 16.5,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    disc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    disc: "Healthy...and green...",
    price: 18.99,
  },
];
function App() {
  const [foodList, setFoodList] = useState(originFoodList);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  const orderListHandler = (newData) => {
    setOrderList((prev) => {
      if (
        prev.find((el) => {
          if (el.id === newData.id) {
            return (el["amount"] += newData.amount);
          }
        })
      ) {
        return [...prev];
      } else {
        return [...prev, newData];
      }
    });
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <FoodList
        orderListHandler={orderListHandler}
        foodList={foodList}
      ></FoodList>
    </>
  );
}

export default App;
