import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";

const MealDetails = () => {
  const [meal, setmeal] = useState(null);
  const { mealid } = useParams();
  console.log(meal?.[0]?.idMeal);

  async function getMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
    );
    const data = await res.json();
    console.log(data?.meals);
    setmeal(data?.meals);
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      {meal == null ? (
        <Skeleton />
      ) : (
        <>
          <div className="mealdetails w-screen flex justify-between items-center">
            <div className="leftmealdiv w-1/3">
              <img src={meal?.[0]?.strMealThumb} className="w-50" alt="" />
              <h1 className="font-semibold">{meal?.[0]?.strMeal}</h1>
              <h1>{meal?.[0]?.strCategory}</h1>
              <h1>Country Dist :{meal?.[0]?.strArea}</h1>
              <button className=" mb-5 p-2 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border">
                Click for more {meal?.[0]?.strArea} dish
              </button>
            </div>
            <div className="rightmealdiv w-1/2">
                <h1>{meal?.[0]?.strInstructions}</h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MealDetails;
