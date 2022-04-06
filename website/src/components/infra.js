import React from 'react';
import './infra.css';
import gym from "./images/gym.jpg";
import mess from "./images/mess.jpg";
import library from "./images/library.jpg";
import music from "./images/music.jpg";
import newcommon from "./images/newcommon.jpg";
import oldcommon from "./images/oldcommon.jpg";
import studyroom from "./images/studyroom.jpg";
import daycanteen from "./images/daycanteen.jpg";
import daycanteen2 from "./images/daycanteen2.jpg";

import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';





const infra = () => {
    return ( 
    <div className="infrasnig infraimages" style={{paddingtop:'0px'}} id="infrasnig">
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
            <h2 style={{paddingBottom:'25px'}}>Infrastructure</h2>          
          
        </div>
      </div>
      <div className="row team-items">
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={mess} alt="Thumb"/>
              <div className="overlay">
                <h4>Mess</h4>
                               
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={library} alt="Thumb"/>
              <div className="overlay">
                <h4>Library</h4>
                               
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={music} alt="Thumb"/>
              <div className="overlay">
                <h4>Music</h4>
                              
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={newcommon} alt="Thumb"/>
              <div className="overlay">
                <h4>New Common</h4>
                           
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={oldcommon} alt="Thumb"/>
              <div className="overlay">
                <h4>Old Common Room</h4>
                             
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen} alt="Thumb"/>
              <div className="overlay">
                <h4>Day Canteen</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen2} alt="Thumb"/>
              <div className="overlay">
                <h4>Store Room</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={studyroom} alt="Thumb"/>
              <div className="overlay">
                <h4>Study Room</h4>
                            
              </div>
            </div>           
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid infraimages" src={daycanteen} alt="Thumb"/>
              <div className="overlay">
                <h4>Day Canteen</h4>
                            
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
    </center>
  </section>
  </div>
);

}
 
export default infra;