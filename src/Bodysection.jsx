import Foodcard from "./Foodcard";

const Bodysection = () => {
  return (
    <>
      <div className="bodysection gap-5 flex flex-wrap justify-around m-4">
      <Foodcard foodimg = {"https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg"}/>
      <Foodcard foodimg={"https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg"}/>
      
      {/* <Foodcard/>
      <Foodcard/> */}
      


      </div>
    </>
  );
};

export default Bodysection;
