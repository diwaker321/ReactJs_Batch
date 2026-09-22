// import { foodData } from "../utils/constant";
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import { foodData } from "../utils/constant";

const Bodysection = () => {
  const [categorydata, setcategorydata] = useState(foodData);

  function handleRestaurent() {
    const filterRestaurent = foodData.filter((res) => res.rating >= 4.5);
  }

  async function getCategoryMeals() {
    const json_res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const data = await json_res.json();
    console.log(data?.categories);
    setcategorydata(data?.categories);
  }

  useEffect(() => {
    getCategoryMeals();
  }, []);
  return (
    <>
      <div className="bodysection   m-4">
        <button
          onClick={handleRestaurent}
          className="ms-4 mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border"
        >
          Top Restaurent
        </button>

        <div className="flex flex-wrap gap-5  justify-around">
          {categorydata.map((res, index) => (
            <Foodcard key={index} foodDetails={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bodysection;
