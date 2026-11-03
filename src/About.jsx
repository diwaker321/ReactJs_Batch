import { useContext } from "react";
import Footersection from "./Footersection";
import Headsection from "./Headsection";
import SearchContext from "../utils/SearchContext";

const About = () => {
  const {searchData} = useContext(SearchContext)
  console.log("About section" , searchData);
  
  return (
    <>
      <div>
        {/* <Headsection/> */}
        <h1>this is your about section</h1>
        {/* <Footersection/> */}
      </div>
    </>
  );
};

export default About