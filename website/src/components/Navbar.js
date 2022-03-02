import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


export default function Navbar(props) {
    return (
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
          
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse contents" id="navbarSupportedContent">
           
    //         <ul className="navbar-nav nav justify-content-center">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">Events</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">Facilites</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">Alumni</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">About</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">Contacts</a>
    //           </li>

             
    //         </ul>
            
    //         {/* <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form> */}
    //       </div>
    //     </div>
    //   </nav>
    <div className="content">
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="https://stackoverflow.com/questions/43037590/field-browser-doesnt-contain-a-valid-alias-configuration">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={Link}>Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={Link}>Facilities</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={Link}>Hall Council</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={Link}>About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={Link}>Contacts</a>
  </li>
</ul>
</div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps= {
    aboutText: 'About'
}