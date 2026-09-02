import FoodCard from "./FoodCard";

const Body = () => {
  const fooditems = [
    {
      id: 1,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg",
      Foodname: "Gingerbread Waffles",
      category: "veg",
      rating: 4.5,
      discount: "20%",
      price: 999,
    },

    {
      id: 2,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg",
      Foodname: "Honey Cookies",
      category: "veg",
      rating: 4.8,
      discount: "30%",
      price: 1200,
    },

    {
      id: 3,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/2i0plx1784837241.jpg",
      Foodname: "Sauerkraut and Fish Salad",
      category: "non-veg",
      rating: 4.0,
      discount: "10%",
      price: 1999,
    },

    {
      id: 4,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
      Foodname: "Apple Pie",
      category: "veg",
      rating: 3.5,
      discount: "20%",
      price: 799,
    },
    {
      id: 9,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg",
      Foodname: "Gingerbread Waffles",
      category: "veg",
      rating: 5.0,
      discount: "20%",
      price: 999,
    },

    {
      id: 10,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg",
      Foodname: "Honey Cookies",
      category: "veg",
      rating: 2.0,
      discount: "30%",
      price: 1200,
    },

    {
      id: 11,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/2i0plx1784837241.jpg",
      Foodname: "Sauerkraut and Fish Salad",
      category: "non-veg",
      rating: 4.7,
      discount: "10%",
      price: 1999,
    },

    {
      id: 12,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
      Foodname: "Apple Pie",
      category: "veg",
      rating: 3.5,
      discount: "20%",
      price: 799,
    },
    {
      id: 5,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/0wmns51784837949.jpg",
      Foodname: "Gingerbread Waffles",
      category: "veg",
      rating: 4.5,
      discount: "20%",
      price: 999,
    },

    {
      id: 6,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/yleo1y1784839077.jpg",
      Foodname: "Honey Cookies",
      category: "veg",
      rating: 3.8,
      discount: "30%",
      price: 1200,
    },

    {
      id: 7,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/2i0plx1784837241.jpg",
      Foodname: "Sauerkraut and Fish Salad",
      category: "non-veg",
      rating: 4.0,
      discount: "10%",
      price: 1999,
    },

    {
      id: 8,
      Foodimg:
        "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
      Foodname: "Apple Pie",
      category: "veg",
      rating: 3.5,
      discount: "20%",
      price: 799,
    },
  ];

  function handleclick() {
    const filterRes = fooditems.filter((res) => res.rating >= 4.5);
    console.log(filterRes);
  }

  return (
    <>
      <div className="btn-section">
        <button className="btn" onClick={handleclick}>
          Top restaurent
        </button>
      </div>

      <div className="bodycont">
        {fooditems.map((res) => (
          <FoodCard key={res.id} fooditem={res} />
        ))}
      </div>
    </>
  );
};

export default Body;
