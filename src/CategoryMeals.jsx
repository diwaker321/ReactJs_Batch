import { useEffect } from "react";
import { useParams } from "react-router";

const CategoryMeals = () => {
  const {mealname} = useParams()
//   console.log(mealname);

  async function getCategoryMeals(){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`)
    const data = await res.json()
    console.log(data);
  }

  useEffect(()=>{
    getCategoryMeals()
  },[])

  
  return (
    <>
      <div>
        <h1>you clicked on {mealname} Category section</h1>
      </div>
    </>
  );
};

export default CategoryMeals