import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import AboutComp from '../components/AboutComp';
import InfraComp from '../components/InfraComp';

function homepage() {
  return (
      <div>
         <NavbarComp/>
         <CarouselComp/>
         <AboutComp/>
         <InfraComp/>
      </div>
  )
}

export default homepage