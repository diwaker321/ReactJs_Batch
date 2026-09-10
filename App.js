import React from "react";
import ReactDOM from "react-dom/client"

const headsection = (
    <div id="headsection">
        <h1>this is your head section</h1>
    </div>
)

const upperbody = <h1>this is your upper body </h1>

const lowerbody = <h1>this is your lower body</h1>

const bodysection = (
    <div id="bodysection">
        <h1>this is your bodysection</h1>
        {upperbody}
        {lowerbody}
    </div>
) // jsx component


const footersection = (
    <div id="footersection">
        <h1>this is your footersection</h1>
    </div>
)


  const maincontainer = ( // multi line jsx 
    <div>
        {headsection}
        {bodysection}
        {footersection}

    </div>
  )
  

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(maincontainer)



