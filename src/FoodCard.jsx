const FoodCard = (props) => {
  console.log(props);
  
  return (
    <>
      <div className="foodcard">
        <div className="imgdiv">
          <img
            src={props.Foodimg}
            alt=""
          />
        </div>
        <div className="foodname">
          <p>{props.Foodname}</p>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
