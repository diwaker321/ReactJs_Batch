const Foodcard = (props) => {
    console.log(props.foodimg);
    
  return (
    <>
      <div>
        <div className="imgsection w-50">
          <img
            src={props.foodimg}
            alt=""
          />
        </div>
        <div className="contentsection">
          <p>Honey Cookies</p>
          <p>$10</p>
        </div>
      </div>
    </>
  );
};

export default Foodcard;
