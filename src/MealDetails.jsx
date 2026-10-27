import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Skeleton from "./Skeleton";

const MealDetails = () => {
  const [meal, setmeal] = useState(null);
  const { mealid } = useParams();
  // console.log(meal?.[0]?.idMeal);
  const navigate = useNavigate();

  async function getMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`,
    );
    const data = await res.json();
    // console.log("original",data?.meals?.[0]);
    // console.log("original",data);
    setmeal(data?.meals?.[0]);
  }

  const ingredients = [];
  const measure = [];
  const ingredientsObj = {};

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal?.[`strIngredient${i}`]?.trim();
    const measurement = meal?.[`strMeasure${i}`]?.trim();
    // ingredient = "olive oil" //true

    if (ingredient) {
      ingredients.push(ingredient);
      measure.push(measurement);
      //how to store elements in object.
      ingredientsObj[ingredient] = measurement;
    }
  }

  console.log(ingredientsObj);
  console.log(Object.entries(ingredientsObj));
  

  function handleAreaDish() {
    navigate(`/mealarea/${meal?.strArea}`);
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
          <div className="mealdetails w-screen flex  gap-10 px-10  mt-10">
            <div className="leftmealdiv w-1/3">
              <img src={meal?.strMealThumb} className="w-2/3" alt="" />
              <div className="ps-1">
                <h1 className="font-semibold text-xl">{meal?.strMeal}</h1>
                <h1 className="text-gray-500">
                  {" "}
                  {meal?.strCategory} Category{" "}
                </h1>
                <h1 className="text-gray-500 mb-1">
                  Country Dish {meal?.strArea}
                </h1>
                <button
                  onClick={handleAreaDish}
                  className=" mb-5 px-1 py-2 w-2/3 rounded-md cursor-pointer bg-red-700 hover:bg-red-600 text-white border"
                >
                  Click for more {meal?.strArea} dish
                </button>
              </div>
            </div>
            <div className="rightmealdiv w-2/3 ">
              <div className="ingredientscontainer flex flex-wrap gap-10 h-70 overflow-auto ">
                {Object.entries(ingredientsObj).map(([ingredient, measurement] , index)=>{
                  return(
                    <div key={index}>
                      <div>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png/small`} alt="" />
                      </div>
                      <div className="flex justify-center gap-1">
                      <h1 className="text-xl font-semibold">{ingredient}</h1>
                      <h1 className="text-xl font-semibold">{measurement}</h1>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="instructions mt-10 ">
                <h1 className="text-center pb-5 text-3xl font-semibold">Instructions</h1>
                <h1>{meal?.strInstructions}</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MealDetails;
