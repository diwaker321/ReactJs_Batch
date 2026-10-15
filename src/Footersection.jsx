import { Link } from "react-router";

const Footersection = () => {
  return (
    <div className="bg-black text-white px-6 pt-10 pb-5 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="max-w-sm">
          <img
            src="https://www.themealdb.com/images/logo.svg"
            alt="TheMealDB Logo"
            className="w-52 mb-4"
          />
          <p className="text-gray-400 text-sm leading-6">
            Discover delicious recipes from around the world.
            Explore ingredients, learn new dishes, and find your
            next favorite meal with TheMealDB.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-red-700 pb-2 inline-block">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-3 text-gray-400">
            <li>
              <Link to="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-red-700 pb-2 inline-block">
            Follow Us
          </h2>

          <div className="flex gap-3">
            <a href="https://www.facebook.com/" target="_blank"
              className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600">
              f
            </a>

            <a href="https://www.instagram.com/" target="_blank"
              className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600">
              I
            </a>

            <a href="https://www.youtube.com/" target="_blank"
              className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600">
              Y
            </a>

            <a href="https://x.com/" target="_blank"
              className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600">
              X
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TheMealDB. All rights reserved.
      </div>
    </div>
  );
};

export default Footersection;