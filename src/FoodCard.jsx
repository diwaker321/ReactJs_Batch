const FoodCard = (fooditem) => {
  console.log(fooditem);
  const {Foodimg , Foodname , category , discount , price , rating } = fooditem
  
  return (
    <>
      <div className="foodcard">
        <div className="imgdiv">
          <img
            src={Foodimg}
            alt=""
          />
        </div>
        <div className="foodname">
          <p>{Foodname}</p>
        </div>
        <div className="foodDetails">
          <p>{category}</p>
          <span>flat {discount} discount</span>
          <p>${price}</p>
          <p>{rating}</p>

        </div>
      </div>
    </>
  );
};

export default FoodCard;
