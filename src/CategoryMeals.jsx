import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CategoryFoodData from "./CategoryFoodData";

const CategoryMeals = () => {
  const { mealname } = useParams();
  const [categoryData , setCategoryData] = useState(null)

  async function getCategoryMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`,
    );
    const data = await res.json();
    console.log(data);
    setCategoryData(data?.meals)
  }

  

  useEffect(() => {
    getCategoryMeals();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {categoryData?.map((res, index)=> <CategoryFoodData key={index} foodDetails = {res}/>)}
      </div>
    </>
  );
};

export default CategoryMeals;
