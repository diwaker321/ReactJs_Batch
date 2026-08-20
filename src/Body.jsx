import FoodCard from "./FoodCard";

const Body = () => {
  return (
    <div className="bodycont">
      <FoodCard Foodimg ="https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg" Foodname ="Gingerbread Waffles" />
      <FoodCard Foodimg ="https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg" Foodname ="Honey Cookies"/>
      <FoodCard Foodimg ="https://www.themealdb.com/images/media/meals/2i0plx1784837241.jpg" Foodname ="Sauerkraut and Fish Salad"/>
      <FoodCard Foodimg ="https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg" Foodname ="Apple Pie"/>
    </div>
  );
};

export default Body