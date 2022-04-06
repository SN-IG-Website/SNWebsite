import React from "react";
import "./galleryback.css";
import granddinner1 from "./images/granddinner1.HEIC" ;
import granddinner2 from "./images/granddinner2.HEIC" ;
import granddinner3 from "./images/granddinner3.HEIC" ;
import granddinner4 from "./images/granddinner4.HEIC" ;
import granddinner5 from "./images/granddinner5.HEIC" ;



function galleryback() {
  return (
    <>
    <center><h1 className="heading">Grand Dinner</h1></center>
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
