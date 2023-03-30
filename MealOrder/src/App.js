import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FoodList from "./components/FoodList/FoodList";
import { useSelector } from "react-redux";

function App() {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://meal-or-default-rtdb.firebaseio.com/originFoodList.json"
      );
      const resData = await res.json();
      setFoodList(() => resData);
      return resData;
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {foodList.length > 0 ? (
        <FoodList foodList={foodList} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
