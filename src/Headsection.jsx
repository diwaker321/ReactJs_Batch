import { Link } from "react-router";

const Headsection = () => {
  return (
    <>
    <div className="mainheader bg-black flex items-center justify-between py-3 px-6">

      <div className="leftsection w-60  ">
        <img src="https://www.themealdb.com/images/logo.svg"  alt="" />
      </div>
      <div className="rightsection flex items-center gap-5">

        <div className="btn bg-red-700 hover:bg-red-600 transition-all px-2 py-1 rounded-md cursor-pointer">
          <Link to="/"> <p className="text-white ">Home</p> </Link>
        </div>

        <Link to="/about"><p className="text-white cursor-pointer">About</p> </Link>
        <Link to="/contact"> <p className="text-white cursor-pointer">Contact</p> </Link>
        <Link> <p className="text-white cursor-pointer">Login</p> </Link>


        <input className="bg-white py-1 px-2 rounded-md" type="text" placeholder="Search Your Meal" />
      </div>

    </div>
    </>
  );
};

export default Headsection