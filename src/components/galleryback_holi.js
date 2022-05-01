import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import holi1 from "./images/holi1.jpeg" ;
import holi2 from "./images/holi2.jpeg" ;
import holi3 from "./images/holi3.jpeg" ;
import holi4 from "./images/holi4.jpeg" ;
import holi5 from "./images/holi5.jpeg" ;
import holi6 from "./images/holi6.jpeg" ;


function galleryback() {
  return (
    <><NavbarComp/>
    <center><div className="heading"><h1 className="backimagecontent">Holi</h1></div></center>
      <div className="row">
        <div className="column">
          <img src={holi1} />
          
     
        </div>
        <div className="column">
          <img src={holi2} />
        
         
        </div>
        <div className="column">
          <img src={holi3} />
        

        </div>
        <div className="column">
          <img src={holi4} />
        
          
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
