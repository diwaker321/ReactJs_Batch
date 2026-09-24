import React from "react";
import ReactDOM from "react-dom/client";
import Headsection from "./src/Headsection";
import Bodysection from "./src/Bodysection";
import Footersection from "./src/Footersection";
import "./app.css"
import About from "./src/About";
import { createBrowserRouter , RouterProvider } from "react-router";
import Contact from "./src/Contact";
const App = () => {
  return (
    <>
      <div>
        <Headsection />
        <Bodysection/>
        <Footersection/>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
