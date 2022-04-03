import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlumniCard from '../components/AlumniCards';
import NavbarComp from '../components/NavbarComp';


function alumni() {
    return (
      <div>
        <NavbarComp/>
        <AlumniCard/>
      </div>
    )
  }
  
  export default alumni