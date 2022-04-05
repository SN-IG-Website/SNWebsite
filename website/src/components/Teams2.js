import React from 'react';
import './Teams2.css';

import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faInstagramI, faFacebookF, faLinkedInL} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faLinkedin , faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


const Teams2 = () => {
    return ( 
    <section id="team" className="team-area">
        <center>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center">
            <h2>Our <span>Team</span></h2>
            <h4>Meet our awesome and expert team members</h4>
          </div>
        </div>
      </div>
      <div className="row team-items">
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                    <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Project Manager</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>App Developer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 single-item">
          <div className="item">
            <div className="thumb">
              <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
              <div className="overlay">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="social">
                  <ul>
                  <li className="twitter">
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Web designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </center>
  </section> );
}
 
export default Teams2;