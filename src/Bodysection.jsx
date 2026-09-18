import { foodData } from "../utils/constant";
import Foodcard from "./Foodcard";

const Bodysection = () => {
  return (
    <>
      <div className="bodysection gap-5 flex flex-wrap justify-around m-4">
      {
        foodData.map((res , index)=> <Foodcard key={index} foodDetails = {res}/>)
      }
      </div>
    </>
  );
};

export default Bodysection;
