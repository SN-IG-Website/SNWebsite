import React from 'react';
import "./galleryfront.css"
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import NavbarComp from './NavbarComp';
import freshers from "./images/freshers.JPG";
import illu from "./images/illu.JPG";
import republic from "./images/republic.jpg";
import granddinner1 from "./images/granddinner1.jpg";
import classsong1 from "./images/classsong1.jpg";
import alumni1 from "./images/alumni1.jpg";
import holi1 from "./images/holi1.jpeg";
import saraswatipuja1 from "./images/saraswatipuja1.jpg";

function galleryfront() {
  return (
    <>
    <NavbarComp/>
      <center>
        <h2 className='gallery_heading' style={{paddingTop:'50px'}}>Photo Gallery</h2>
      </center>
     
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <a href="gallery/label"><Image className="gallery-img" src={freshers} thumbnail /></a>
             <center> <h3>Freshers' Party</h3>  </center>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <a href="illu"><Image className="gallery-img" src={illu} thumbnail /></a>
          <center><h3>Illumination</h3></center>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <a href="republic"><Image className="gallery-img" src={republic} thumbnail /></a>
          <center> <h3>Republic Day</h3></center>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
          <a href="grand-dinner"><Image className="gallery-img" src={granddinner1} thumbnail /></a>
          <center><h3>Grand Dinner</h3></center>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <a href="alumni-meet"><Image className="gallery-img" src={alumni1} thumbnail /></a>
          <center><h3>Alumni Meet</h3></center>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <a href="class-song"><Image className="gallery-img" src={classsong1} thumbnail /></a>
          <center> <h3>Class Song</h3></center>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
          <a href="holi"><Image className="gallery-img" src={holi1} thumbnail /></a>
          <center><h3>Holi</h3></center>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <a href="saraswati-puja"><Image className="gallery-img" src={saraswatipuja1} thumbnail /></a>
          <center><h3>Saraswati Puja</h3></center>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <a href="farewell"><Image className="gallery-img" src={classsong1} thumbnail /></a>
          <center> <h3>Farewell</h3></center>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
      </Grid>
      ;
    </>
  )
}

export default galleryfront ;