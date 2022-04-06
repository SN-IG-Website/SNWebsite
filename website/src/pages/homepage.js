import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import AboutComp from '../components/AboutComp';
import InfraComp from '../components/InfraComp';
import Footer from '../components/footer';
import Infra from '../components/infra';

function homepage() {
  return (
      <div style={{backgroundColor: "#FBE5E5"}}>
          <NavbarComp/>
         <CarouselComp/>
         <AboutComp/>
         <Infra/>
         <Footer/>
      </div>
  )
}

export default homepage