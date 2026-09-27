import React from "react";
import ReactDOM from "react-dom/client";
import Headsection from "./src/Headsection";
import Bodysection from "./src/Bodysection";
import Footersection from "./src/Footersection";
import "./app.css";
import About from "./src/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/Contact";
import Error from "./src/Error";
import CategoryMeals from "./src/CategoryMeals";
const App = () => {
  return (
    <>
      <div>
        <Headsection />
        {/* <Contact/> "/contact" */}
        <Outlet/>
        <Footersection />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element: <Bodysection/>
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/category/:mealname",
        element:<CategoryMeals/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
