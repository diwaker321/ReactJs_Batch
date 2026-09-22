const Foodcard = (props) => { 
  const {strCategoryThumb ,strCategory } = props.foodDetails

    
  return (
    <>
      <div className=" p-5 rounded-md shadow-lg cursor-pointer">
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
