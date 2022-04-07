import React from 'react';
import './Warden.css';
import NavbarComp from './NavbarComp';


import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedin , faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

//images

import DebarpitaJyoti from './images2/DebarpitaJyoti.jpg';
import AlishaChannel from './images2/AlishaChandel.jpg';
import AnweshaPatel from './images2/AnweshaPatel.jpg';
import AshlesaGoyal from './images2/AshlesaGoyal.jpeg';
import CharviJain from './images2/CharviJain.jpeg';
import DishaChoraria from './images2/DishaChoraria.jpeg';
import elizaroy from './images2/elizaroy.JPG';
import FizaNissam from './images2/FizaNissam.jpg';
import GargiDas from './images2/GargiDas.jpeg';
import GauriPatki from './images2/GauriPatki.jpg';
import GunjanAgarwal from './images2/GunjanAgarwal.jpg';
import IshitaJhunjhunwala from './images2/IshitaJhunjhunwala.jpg';
import KashishLundia from './images2/KashishLundia.jpg';
import KirtiChoudhary from './images2/KirtiChoudhary.JPG';
import navya from './images2/navya.jpg';
import NidhiGoyal from './images2/NidhiGoyal.jpg';
import NikithaBobbary from './images2/NikithaBobbary.jpg';
import PoulomiChaudhuri from './images2/PoulomiChaudhuri.jpeg';
import PrachiBajpai from './images2/PrachiBajpai.jpg';
import RajshreeSharma from './images2/RajshreeSharma.jpg';
import rhea from './images2/rhea.jpg';
import RoshniKar from './images2/RoshniKar.png';
import Rushali from './images2/RushaliChakraborty.jpg'
import SanskritiKashyap from './images2/SanskritiKashyap.jpg';
import SejalShambharkar from './images2/SejalShambharkar.jpg';
import ShikhaBagaria from './images2/ShikhaBagaria.jpeg';
import ShivaniAnneboina from './images2/ShivaniAnneboina.jpeg';
import SraavyaUppala from './images2/SraavyaUppala.jpg';
import SwastikaMandal from './images2/SwastikaMandal.jpg';
import TanayaRamane from './images2/TanayaRamane.jpg';
import YashasviRathore from './images2/YashasviRathore.PNG';


const Warden = () => {
    return ( 
    <>
    <NavbarComp/>
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <div className="row">
        {/* <div className="col-md-12">
          <div className="site-heading text-center">
            <h2>Our <span>Team</span></h2>
            <h4>Meet our awesome and expert team members</h4>
          </div>
        </div> */}
      </div>
      <div className="row team-items">
      <div className="row team-items centered">

      <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={rhea} alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                Commending the wins and celebrating the losses.                </p>
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/rhea2801/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/rhea2801/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Rhea Sundaresan</h4>
              <span>General Secretary Sports and Games</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={IshitaJhunjhunwala} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                The best is yet to come...                </p>
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/prachi.bajpai.58726/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/prachi-bajpai-011086172/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Ishita Jhunjhunwala</h4>
              <span>General Secretary Technology</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src={IshitaJhunjhunwala} alt="Thumb"/>
              <div className="overlay">
                {/* <h4>Lorem Ipsum</h4> */}
                <p>
                The best is yet to come...                </p>
                <div className="social">
                  <ul>
                  {/* <li className="twitter">
                      <a href="https://www.facebook.com/prachi.bajpai.58726/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </li> */}
                    <li className="pinterest">
                      <a href="https://www.linkedin.com/in/prachi-bajpai-011086172/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    {/* <li className="instagram">
                      <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
              </span>
              <h4>Ishita Jhunjhunwala</h4>
              <span>General Secretary Technology</span>
            </div>
          </div>
        </div>

</div>





      </div>
    </div>
    </center>
  </section>
  </>
);

}
 
export default Warden;