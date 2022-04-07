import React from "react";
import NavbarComp from "./NavbarComp";
import Tabs from "./Tabs";
import "./AchievComp.css";
import { Dropdown } from "react-bootstrap";
import Flipcard from "./Flipcard";
import { Col, Row, Image } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import "./Flipcard.css";
import tec1 from "./images/tec1.jpg";
import tech2 from "./images/tech2.jpeg";

import Picture1 from "./images/Picture1.jpg";
import Picture2 from "./images/Picture2.jpg";
import Picture3 from "./images/Picture3.jpg";
import Picture4 from "./images/Picture4.jpg";
import Picture5 from "./images/Picture5.jpg";
import Picture6 from "./images/Picture6.jpg";
import Picture7 from "./images/Picture7.jpg";
import Picture8 from "./images/Picture8.jpg";





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
                <div>
                  <Grid>
                    <Row className="mx-2">
                      <Col xs={6} md={3}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture1}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture2}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture3}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture4}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mx-2" style={{paddingTop:'40px'}}>
                      <Col xs={6} md={3}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture5}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture6}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture7}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={Picture8}
                              />
                            </div>
                            <div class="side back">Jimmy Eat World</div>
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
                <div>
                  <Grid>
                    <Row className="mx-2">
                      <Col xs={6} md={3}>
                        <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={tec1}
                              />
                            </div>
                            <div class="side back"><h1>Data Analytics</h1></div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                      <div class="card-container">
                          <div class="card">
                            <div class="side">
                              <img
                                class="flipimage"
                                src={tech2}
                              />
                            </div>
                            <div class="side back"><h1>Hand Modelling</h1></div>
                          </div>
                        </div>
                      </Col>                     
                    </Row>
                  </Grid>
                </div>
              </center>
            </div>         
        <div label="Social & Culture">
        </div>
      </Tabs>
    </div>
  );
}

export default AchievComp;
