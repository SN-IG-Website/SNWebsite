import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import alumni1 from "./images/alumni1.jpg" ;
import alumni2 from "./images/alumni2.jpg" ;
import alumni3 from "./images/alumni3.jpg" ;
import alumni4 from "./images/alumni4.jpg" ;
import alumni5 from "./images/alumni5.jpg" ;
import alumni6 from "./images/alumni6.jpg" ;
import alumni7 from "./images/alumni7.jpg" ;
import alumni8 from "./images/alumni8.jpg" ;
import alumni9 from "./images/alumni9.jpg" ;
import alumni10 from "./images/alumni10.jpg" ;

function galleryback() {
  return (
    <><NavbarComp/>
    <center><div className="heading"><h1 className="backimagecontent">Farewell</h1></div></center>
      <div className="row">
        <div className="column">
          <img src={alumni1} />
          <img src={alumni5} />
          <img src={alumni9} />
     
        </div>
        <div className="column">
          <img src={alumni2} />
          <img src={alumni6} />
         
        </div>
        <div className="column">
          <img src={alumni3} />
          <img src={alumni7} />

        </div>
        <div className="column">
          <img src={alumni4} />
          <img src={alumni8} />
          <img src={alumni10} />
          
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
