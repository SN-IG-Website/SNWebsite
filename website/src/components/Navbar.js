import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
/*import {Link, NavLink} from "react-router-dom";*/

/*import Teams from './Teams';*/


export default function Navbar(props) {
    return (
    <div className="content">
        {/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <NavLink className="nav-link active" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/About">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Facilities">Facilities</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Events">Events</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/HallCouncil">Hall Council</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/OurTeam" className="nav-link">Our Team</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
  </li>
</ul> */}
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