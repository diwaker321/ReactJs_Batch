import { useNavigate, useOutletContext } from "react-router";

const Foodcard = (props) => { 
  const {strCategoryThumb ,strCategory } = props.foodDetails
  const navigate = useNavigate()

  function handleCategory(){
    navigate(`/category/${strCategory}`)
  }

  const { searchData } = useOutletContext();
  console.log("foodcard section",searchData);
  


    
  return (
    <>
      <div onClick={handleCategory} className=" p-5 rounded-md shadow-lg cursor-pointer">
        <div className="imgsection w-60">
          <img
            src={strCategoryThumb}
            alt=""
          />
        </div>
        <div className="contentsection text-center">
          <p>{strCategory}</p>
        </div>
      </div>
    </>
  );
};

export default Foodcard;
