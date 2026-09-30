import { useNavigate } from "react-router";

const CategoryFoodData = (props) => {
  console.log(props.foodDetails);

  const { idMeal, strCategory, strCountry, strMeal, strMealThumb } = props.foodDetails;
  
  const navigate = useNavigate()

  function handlemeal(){
    console.log("clicked");
    navigate(`/mealDetails/${idMeal}`)
  }
  

  return (
    <>
      <div onClick={handlemeal} className=" p-5 rounded-md shadow-lg cursor-pointer">
        <div className="imgsection w-60">
          <img src={strMealThumb} alt="" />
        </div>
        <div className="contentsection text-center">
          <p>{strMeal}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryFoodData;
