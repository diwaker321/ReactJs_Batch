const Skeleton = () => {
  const arr = new Array(10).fill(0);

  return (
    <>
    <div className="flex flex-wrap justify-around">
      {arr.map((_,index) => {
        return (
          
            <div key={index} className="skeletonContainer  shadow-md h-65 w-60 mx-5 my-5 p-2 rounded-md">
              <div className="upperdiv w-full  h-32 bg-gray-100 rounded-md "></div>
              <div className="lowerdiv w-full">
                <div className="statement w-full my-2 p-2 rounded-xl bg-gray-100"></div>
                <div className="statement w-2/4 my-2 p-2 rounded-xl bg-gray-100"></div>
                <div className="statement w-3/4 my-2 p-2 rounded-xl bg-gray-100"></div>

                <div className="btnsection ">
                  <div className="btn w-1/3 my-2 py-3 rounded-xl bg-gray-100"></div>
                </div>
              </div>
            </div>
          
        );
      })}
      </div>
    </>
  );
};

export default Skeleton;
