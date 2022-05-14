import React from "react";
import "./galleryback.css";
import NavbarComp from './NavbarComp';
import Footer from '../components/footer';
import holi1 from "./images/holi1.jpeg" ;
import holi2 from "./images/holi2.jpeg" ;
import holi3 from "./images/holi3.jpeg" ;
import holi4 from "./images/holi4.jpeg" ;
// import holi5 from "./images/holi5.jpeg" ;
// import holi6 from "./images/holi6.jpeg" ;


function galleryback() {
  return (
    <><NavbarComp/>
    {/* <center><div className="heading"><h1 className="backimagecontent">Holi</h1></div></center> */}
    <div className="text">
          <div
            className="Main-header"
            style={{
              paddingTop: "70px",
              paddingBottom: "0px",
              // backgroundColor: "#E3B7A0",
              // backgroundImage: "linear-gradient(150deg,#E3B7A0,#BF9270",
            }}
         / ></div>
     <div className="site-heading text-center" style={{marginBottom:'5px'}}>
              <h5
                className="heading"
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  marginTop: "30px",
                  padding: "0 px",
                  fontWeight: "700",
                }}
              >
                {" "}
                Holi{" "}
              </h5>
              
              <h4 style={{paddingBottom:'0px'}}> </h4>
            </div>
      <div className="row">
        <div className="column">
          <img alt=""  src={holi1} />
          
     
        </div>
        <div className="column">
          <img alt=""  src={holi2} />
        
         
        </div>
        <div className="column">
          <img alt=""  src={holi3} />
        

        </div>
        <div className="column">
          <img alt=""  src={holi4} />
        
          
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default galleryback;
