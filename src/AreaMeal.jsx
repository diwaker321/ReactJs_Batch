import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const AreaMeal = () => {
    const navigate = useNavigate()
  const { areaName } = useParams();
  const [areaMeal, setAreaMeal] = useState(null);
  async function getareaMeal() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`,
    );
    const data = await res.json();
    // console.log(data?.meals);
    setAreaMeal(data?.meals);
  }

  useEffect(() => {
    getareaMeal();
  }, []);

    function handlemeal(id){
    console.log("clicked");
    navigate(`/mealDetails/${id}`)
  }
  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-2">
        {areaName} Dish
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {areaMeal?.map((res) => {
          return (
            <div
              key={res?.idMeal}
              onClick={()=>handlemeal(res?.idMeal)}
              className=" p-5 rounded-md shadow-lg cursor-pointer "
            >
              <div className="imgsection w-60">
                <img src={res?.strMealThumb} alt="" />
              </div>
              <div className="contentsection text-center">
                <p>{res?.strMeal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AreaMeal;
