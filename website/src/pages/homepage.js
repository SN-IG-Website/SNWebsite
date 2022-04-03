import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import AboutComp from '../components/AboutComp';
import InfraComp from '../components/InfraComp';
import Footer from '../components/footer';

function homepage() {
  return (
      <div>
         <NavbarComp/>
         <CarouselComp/>
         <AboutComp/>
         <InfraComp/>
         <Footer/>
      </div>
  )
}

export default homepage