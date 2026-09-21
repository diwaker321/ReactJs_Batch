// import { foodData } from "../utils/constant";
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";

const Bodysection = () => {
  let foodData = [
    {
      foodimg:
        "https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg",
      rating: 4.5,
      duration: "10-30 mins",
      price: "$10",
      foodname: "Honey Cookies",
    },

    {
      foodimg:
        "https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg",
      rating: 4.1,
      duration: "30-35 mins",
      price: "$12",
      foodname: "Gingerbread Waffles",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1549542877.jpg",
      rating: 3.9,
      duration: "25-30 mins",
      price: "$9",
      foodname: "Chicken Curry",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
      rating: 4.6,
      duration: "15-20 mins",
      price: "$11",
      foodname: "Vegetable Pasta",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
      rating: 4.3,
      duration: "20-30 mins",
      price: "$13",
      foodname: "Chicken Biryani",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
      rating: 4.9,
      duration: "10-15 mins",
      price: "$8",
      foodname: "Chocolate Cake",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      rating: 4.7,
      duration: "15-25 mins",
      price: "$10",
      foodname: "Chicken Sandwich",
    },

    {
      foodimg: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
      rating: 4.0,
      duration: "10-20 mins",
      price: "$9",
      foodname: "Creamy Pasta",
    },
  ];
  const [restaurentData, setrestaurentData] = useState(foodData);

  let [score , setscore] = useState(0)

  // useEffect(()=>{
  //   console.log("score has been changed");
    
  // },[score])

  function handleRestaurent() {
    const filterRestaurent = foodData.filter((res) => res.rating >= 4.5);
    setrestaurentData(filterRestaurent);
  }

  function handleChangeScore(){
    setscore(score++)
  }

  //fetch .
  // async await

  async function getCategoryMeals() {
    const json_res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const data = await json_res.json();
    console.log(data);
  }

  useEffect(()=>{
    getCategoryMeals()
  },[])
  return (
    <>
      <div className="bodysection   m-4">
        <button
          onClick={handleRestaurent}
          className="ms-4 mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border"
        >
          Top Restaurent
        </button>

        <button
          onClick={handleChangeScore}
          className="ms-4 mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border"
        >
          Change Score {score}
        </button>

      
        <div className="flex flex-wrap gap-5  justify-around">
          {restaurentData.map((res, index) => (
            <Foodcard key={index} foodDetails={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bodysection;
