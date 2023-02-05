import Card from "../UI/Card";
import className from "./Banner.module.css";
const Banner = () => {
  return (
    <Card className={className.Banner}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};
export default Banner;
