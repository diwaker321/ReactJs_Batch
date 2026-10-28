// import { foodData } from "../utils/constant";
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import { foodData } from "../utils/constant";
import Skeleton from "./Skeleton";
import { useNavigate, useOutletContext } from "react-router";

const Bodysection = () => {
  // const [categorydata, setcategorydata] = useState(foodData);
  const [categorydata, setcategorydata] = useState(null);
  const navigate = useNavigate();

  const { searchData } = useOutletContext();
  // console.log(searchData);

  async function getCategoryMeals() {
    const json_res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    const data = await json_res.json();
    // console.log(data?.categories);
    setcategorydata(data?.categories);
  }

  // useEffect(() => {
  //   getCategoryMeals();
  // }, []); // empty dependancy array . it will run only once

  
  useEffect(() => {
    getCategoryMeals();
  }, [searchData]); // dependancy array . it will run searchdata change perform

  function handleSearchMeal(id) {
    navigate(`/mealDetails/${id}`);
  }
  return (
    <>
      <div className="bodysection  p-4">
        <button className="ms-4 mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border">
          Top Restaurent
        </button>
        {searchData == null ? (
          <div className="flex flex-wrap gap-5  justify-around">
            {categorydata == null ? (
              <Skeleton />
            ) : (
              categorydata.map((res, index) => (
                <Foodcard key={index} foodDetails={res} />
              ))
            )}
          </div>
        ) : (
          <div className="flex flex-wrap gap-5 justify-around">
            {searchData.map((res) => {
              return (
                <div
                  onClick={() => handleSearchMeal(res.idMeal)}
                  className="searchMeal cursor-pointer p-5 rounded-md shadow-md hover:shadow-lg cursor-pointer w-60"
                  key={res.idMeal}
                >
                  <div className="imgdiv">
                    <img src={res.strMealThumb} className="w-50" alt="" />
                  </div>
                  <div className="contentdiv text-center pt-1">
                    <h1>{res.strMeal}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Bodysection;
