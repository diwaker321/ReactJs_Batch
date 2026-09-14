import React from "react";
import ReactDOM from "react-dom/client";
import Headsection from "./src/Headsection";
import Bodysection from "./src/Bodysection";
import Footersection from "./src/Footersection";
import "./app.css"
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
