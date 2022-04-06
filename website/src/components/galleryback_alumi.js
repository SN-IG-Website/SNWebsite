import React from "react";
import "./galleryback.css";
import alumni1 from "./images/alumni1.jpg" ;
import alumni2 from "./images/alumni2.jpg" ;
import alumni3 from "./images/alumni3.jpg" ;
import alumni4 from "./images/alumni4.jpg" ;


function galleryback() {
  return (
    <>
    <center><h1 className="heading">Alumni Meet</h1></center>
      <div className="row">
        <div className="column">
          <img src={alumni1} />
     
        </div>
        <div className="column">
          <img src={alumni2} />
         
        </div>
        <div className="column">
          <img src={alumni3} />

        </div>
        <div className="column">
          <img src={alumni4} />
          
        </div>
      </div>
    </>
  );
}

export default galleryback;
