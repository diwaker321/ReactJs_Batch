const Headsection = () => {
  return (
    <>
    <div className="mainheader bg-black flex items-center justify-between py-3 px-6">

      <div className="leftsection w-60  ">
        <img src="https://www.themealdb.com/images/logo.svg"  alt="" />
      </div>
      <div className="rightsection flex items-center gap-5">

        <div className="btn bg-red-700 hover:bg-red-600 transition-all px-2 py-1 rounded-md cursor-pointer">
          <p className="text-white ">Home</p>
        </div>

        <p className="text-white">API</p>

        <input className="bg-white py-1 px-2 rounded-md" type="text" placeholder="Search Your Meal" />
      </div>

    </div>
    </>
  );
};

export default Headsection