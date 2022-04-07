import React from "react";
import "./galleryback.css";
import classsong1 from "./images/classsong1.jpg" ;
import classsong2 from "./images/classsong2.jpg" ;
import classsong3 from "./images/classsong3.jpg" ;
import classsong4 from "./images/classsong4.jpg" ;
import classsong5 from "./images/classsong5.jpg" ;
import classsong6 from "./images/classsong6.jpg" ;
import classsong7 from "./images/classsong7.jpg" ;
import classsong8 from "./images/classsong8.jpg" ;
import classsong9 from "./images/classsong9.jpg" ;
import classsong10 from "./images/classsong10.jpg" ;
import classsong11 from "./images/classsong11.jpg" ;
import classsong12 from "./images/classsong12.jpg" ;
import classsong13 from "./images/classsong13.jpg" ;
import classsong14 from "./images/classsong14.jpg" ;
import classsong15 from "./images/classsong15.jpg" ;
import classsong16 from "./images/classsong16.jpg" ;




function galleryback() {
    return (
      <>
      <center><h1 className="heading">Class Song</h1></center>
        <div className="row">
          <div className="column">
          <img src={classsong1} />
          <img src={classsong2} />
          <img src={classsong3} />
          <img src={classsong4} />

  
           
          </div>
          <div className="column">
          <img src={classsong4} />
          <img src={classsong5} />
          <img src={classsong6} />
          <img src={classsong7} />
          </div>
          <div className="column">
          <img src={classsong8} />
          <img src={classsong9} />
          <img src={classsong10} />
          <img src={classsong11} />
          </div>
          <div className="column">
          <img src={classsong12} />
          <img src={classsong13} />
          <img src={classsong14} />
          <img src={classsong15} />
          </div>
        </div>
      </>
    );
  }
  
  export default galleryback;
  