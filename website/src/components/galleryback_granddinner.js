import React from "react";
import "./galleryback.css";
import granddinner1 from "./images/granddinner1.jpg" ;
import granddinner2 from "./images/granddinner2.jpg" ;
import granddinner3 from "./images/granddinner3.jpg" ;
import granddinner4 from "./images/granddinner4.jpg" ;
import granddinner5 from "./images/granddinner5.jpg" ;



function galleryback() {
  return (
    <>
     <center><div className="heading"><h1 >Grand Dinner</h1></div></center>
      <div className="row">
        <div className="column">
          <img src={granddinner1} />
          <img src={granddinner5} />

        </div>
        <div className="column">
        <img src={granddinner2} />
        </div>
        <div className="column">
        <img src={granddinner3} />
        </div>
        <div className="column">
        <img src={granddinner4} />
        </div>
      </div>
    </>
  );
}

export default galleryback;
