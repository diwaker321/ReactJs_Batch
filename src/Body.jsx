import FoodCard from "./FoodCard";

const Body = () => {
  const fooditems = [
    {
      Foodimg:
        "https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg",
      Foodname: "Gingerbread Waffles",
      category: "veg",
      rating: "4.5",
      discount: "20%",
      price: 999,
    },

    {
      Foodimg:
        "https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg",
      Foodname: "Honey Cookies",
      category: "veg",
      rating: "4.8",
      discount: "30%",
      price: 1200,
    },

    {
      Foodimg:
        "https://www.themealdb.com/images/media/meals/2i0plx1784837241.jpg",
      Foodname: "Sauerkraut and Fish Salad",
      category: "non-veg",
      rating: "4.0",
      discount: "10%",
      price: 1999,
    },

    {
      Foodimg:
        "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
      Foodname: "Apple Pie",
      category: "veg",
      rating: "3.5",
      discount: "20%",
      price: 799,
    },
  ];

  return (
    <div className="bodycont">
      {fooditems.map((res) => (
        <FoodCard fooditem={res} />
      ))}
    </div>
  );
};

export default Body;
