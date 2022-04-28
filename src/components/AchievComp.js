import React from "react";
import NavbarComp from "./NavbarComp";
import Tabs from "./Tabs";
import "./AchievComp.css";
import { Dropdown } from "react-bootstrap";
import Flipcard from "./Flipcard";
import { Col, Row, Image } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import "./Flipcard.css";
import Athletics from "./images/athletics.jpg";
import tec1 from "./images/tec1.jpg";
import tech2 from "./images/tech2.jpeg";
import gold from "./images/gold-medal.png";
import bronze from "./images/bronze-medal.png";
import Picture1 from "./images/Picture1.jpg";
import Picture2 from "./images/Picture2.jpg";
import Picture3 from "./images/Picture3.jpg";
import Picture4 from "./images/Picture4.jpg";
import Volley from "./images/volley.jpg";
import Picture6 from "./images/Picture6.jpg";
import Picture7 from "./images/Picture7.jpg";
import Picture8 from "./images/Picture8.jpg";
import Footer from '../components/footer';
import BasketballTeam from "./images/basketballteam.jpeg";



function AchievComp() {
  return (
    <div className="achiev-section">
      <NavbarComp />
      <center>
        <h1>Achievements</h1>
      </center>
      <Tabs>
        <div label="Sports & Games">           
              <center>
                <div style={{marginBottom:'25px'}}>
                  <Grid>
                    <Row className="mx-2" >
                      <Col xs={6} md={4}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Athletics}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Athletics</h1></div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture2}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Aquatics</h1></div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture3}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Badminton</h1></div>
                          </div>
                        </div>
                      </Col>                    
                    </Row>
                    <Row className="mx-2" style={{paddingTop:'40px'}}>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={BasketballTeam}
                              
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Basketball</h1>
                                <p>2021-22| Interhall Tournament- Gold 
                                    <img src={gold} style={{height:'30px',width:'30px'}}></img>
                                </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Volley}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Volleyball</h1></div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture6}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Lawn Tennis</h1></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mx-2" style={{paddingTop:'40px'}}>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture7}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Table Tennis</h1></div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture8}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Chess</h1></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>
              </center>
            </div>           
        <div label="Technology">
            <center>
                <div style={{marginBottom:'25px'}}>
                  <Grid>
                    <Row className="mx-2">
                    <Col xs={6} md={4}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={tech2}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Hardware Modelling</h1></div>
                          </div>
                        </div>
                      </Col>   
                      <Col xs={6} md={4}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={tec1}
                              />
                            </div>
                            <div class="side back"><h1 style={{marginTop:'15px'}}>Data Analytics</h1>
                                <p>2022-23| Open IIT- Bronze
                                    <img src={bronze} style={{height:'30px',width:'30px'}}></img>
                                </p>
                            </div>
                          </div>
                        </div>
                      </Col>                                       
                    </Row>
                  </Grid>
                </div>
              </center>
            </div>         
        <div label="Social & Culture">
          <div style={{marginBottom:'195px'}}>
          <p>This page will be updated soon...</p>
        </div>
        </div>
      </Tabs>
      <Footer/>
    </div>
  );
}

export default AchievComp;
