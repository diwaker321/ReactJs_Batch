import { useNavigate } from "react-router";

const Foodcard = (props) => { 
  const {strCategoryThumb ,strCategory } = props.foodDetails
  const navigate = useNavigate()

  function handleCategory(){
    console.log("clicked" , strCategory);
    navigate(`/category/${strCategory}`)
    //dynamic route and navigate .
    //  useNavigate
    //concept of useParams (it is a hook)

    
  }

    
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
