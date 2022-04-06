import React from 'react';
import "./galleryfront.css"
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import NavbarComp from './NavbarComp';
import freshers from "./images/freshers.JPG";
import illu from "./images/illu.JPG";
import republic from "./images/republic.jpg";
import granddinner1 from "./images/granddinner1.jpg";

function galleryfront() {
  return (
    <>
    <NavbarComp/>
      <center>
        <h2>Photo Gallery</h2>
      </center>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <a href="gallery/label"><Image className="gallery-img" src={freshers} thumbnail /></a>
              <h3>Freshers' Party</h3>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <a href="illu"><Image className="gallery-img" src={illu} thumbnail /></a>
              <h3>Illumination</h3>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <a href="republic"><Image className="gallery-img" src={republic} thumbnail /></a>
              <h3>Republic Day</h3>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
          <a href="grand-dinner"><Image className="gallery-img" src={granddinner1} thumbnail /></a>
              <h3>Grand Dinner</h3>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <Image className="gallery-img" src={"./"} thumbnail />
              <h3>Alumni Meet</h3>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="gallery-img" src={"./"} thumbnail />
              <h3>Holi</h3>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
      </Grid>
      ;
    </>
  )
}

export default galleryfront ;