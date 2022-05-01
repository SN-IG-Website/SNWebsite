import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import republic1 from "./images/republic1.jpg" ;
import republic2 from "./images/republic2.jpg" ;
import republic3 from "./images/republic3.jpg" ;
import republic4 from "./images/republic4.jpg" ;
import republic5 from "./images/republic5.jpg" ;
import republic6 from "./images/republic6.jpg" ;
import republic7 from "./images/republic7.jpg" ;
import republic8 from "./images/republic8.jpg" ;



function galleryback() {
  return (
    <><NavbarComp/>
     <center><div className="heading"><h1 className="backimagecontent">Republic Day</h1></div></center>
      <div className="row">
        <div className="column">
          <img src={republic1} />
          <img src={republic5} />
        </div>
        <div className="column">
        <img src={republic2} /> 
        <img src={republic6} /> 
        </div>
        <div className="column">
        <img src={republic3} />
        <img src={republic7} />
        </div>
        <div className="column">
        <img src={republic4} />
        <img src={republic8} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
