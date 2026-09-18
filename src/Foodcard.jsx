const Foodcard = (props) => {
  //object destructure
  //objects and loops using map function in js 
  const {foodimg ,foodname , price , duration , rating  } = props.foodDetails
    console.log(props);
    
  return (
    <>
      <div>
        <div className="imgsection w-50">
          <img
            src={foodimg}
            alt=""
          />
        </div>
        <div className="contentsection">
          <p>{foodname}</p>
          <p>{price}</p>
          <p>{duration}</p>
          <p>{rating} rating</p>
        </div>
      </div>
    </>
  );
};

export default Foodcard;
