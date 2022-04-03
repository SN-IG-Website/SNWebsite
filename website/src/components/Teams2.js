import React from 'react';
import './Teams2.css';

import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Teams2 = () => {
    return ( 
    <section id="team" className="team-area">
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
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="vimeo">
                      <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><i className="fas fa-envelope-open"></i></Link>
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
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="vimeo">
                      <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><i className="fas fa-envelope-open"></i></Link>
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
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                    </li>
                    <li className="pinterest">
                      <Link href="#"><i className="fab fa-pinterest"></i></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="vimeo">
                      <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="info">
              <span className="message">
                <Link href="#"><i className="fas fa-envelope-open"></i></Link>
              </span>
              <h4>Lorem Ipsum</h4>
              <span>Web designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> );
}
 
export default Teams2;