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

  const cartAmountHandler = (newData) => {
    setOrderList((prev) => {
      prev = prev.map((el) => {
        if (el.id == newData.id) {
          el["amount"] = newData.amount;
          return el;
        }
        return el;
      });
      prev = prev.filter((el) => {
        return el.amount > 0;
      });
      return [...prev];
    });
  };

  const orderListHandler = (newData) => {
    setOrderList((prev) => {
      let newArr = [];
      if (
        prev.find((el) => {
          if (el.id === newData.id && el["amount"] + newData.amount >= 0) {
            return (el["amount"] += newData.amount);
          }
        })
      ) {
        newArr = [...prev];
        return newArr;
      } else {
        newArr = [...prev, newData];
        return newArr;
      }
    });
  };
  return (
    <>
      <Header
        orderList={orderList}
        cartAmountHandler={cartAmountHandler}
      ></Header>
      <Banner></Banner>
      <FoodList
        foodList={foodList}
        orderListHandler={orderListHandler}
      ></FoodList>
    </>
  );
}

export default App;
