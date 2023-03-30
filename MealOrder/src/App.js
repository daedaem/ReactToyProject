import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FoodList from "./components/FoodList/FoodList";
import { useSelector } from "react-redux";
import CartList from "./components/Cart/CartList";

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
  // const [orderList, setOrderList] = useState([]);

  const orderList = useSelector((state) => state.cartList);
  // const cartAmountHandler = (newData) => {
  //   setOrderList((prev) => {
  //     prev = prev.map((el) => {
  //       if (el.id === newData.id) {
  //         el["amount"] = newData.amount;
  //         return el;
  //       }
  //       return el;
  //     });
  //     prev = prev.filter((el) => {
  //       return el.amount > 0;
  //     });
  //     return [...prev];
  //   });
  // };

  // const orderListHandler = (newData) => {};
  return (
    <>
      <Header
        orderList={orderList}
        // cartAmountHandler={cartAmountHandler}
      ></Header>
      <Banner></Banner>
      <FoodList
        foodList={foodList}
        // orderListHandler={orderListHandler}
      ></FoodList>
    </>
  );
}

export default App;
