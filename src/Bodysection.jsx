// import { foodData } from "../utils/constant";
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import { foodData } from "../utils/constant";
import Skeleton from "./Skeleton";
import { useOutletContext } from "react-router";

const Bodysection = () => {
  // const [categorydata, setcategorydata] = useState(foodData);
  const [categorydata, setcategorydata] = useState(null);

  const {searchData} = useOutletContext();
  console.log(searchData);
  


  async function getCategoryMeals() {
    const json_res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const data = await json_res.json();
    // console.log(data?.categories);
    setcategorydata(data?.categories);
  }

  useEffect(() => {
    getCategoryMeals();
  }, []);
  return (
    <>
      <div className="bodysection   m-4">
        <button
          className="ms-4 mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border"
        >
          Top Restaurent
        </button>

        <div className="flex flex-wrap gap-5  justify-around">
          {/* {categorydata.map((res, index) => (
            <Foodcard key={index} foodDetails={res} />
          ))} */}
          {categorydata == null ? (
            <Skeleton />
          ) : (
            categorydata.map((res, index) => (
              <Foodcard key={index} foodDetails={res} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Bodysection;
