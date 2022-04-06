import React from 'react';
import "./galleryfront.css"
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import NavbarComp from './NavbarComp';
import freshers from "./images/freshers.JPG";
import illu from "./images/illu.JPG";
import republic from "./images/republic.jpg";

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
              <h3>Freshers Party</h3>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <a href="illu"><Image className="gallery-img" src={illu} thumbnail /></a>
              <h3>Illumination</h3>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="gallery-img" src={republic} thumbnail />
              <h3>Republic Day</h3>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
          <Image className="gallery-img" src="https://us.123rf.com/450wm/utrasto/utrasto1910/utrasto191000026/134616504-watermelon-the-size-of-an-apricot-lie-together-in-one-hand-.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
            
          </Col>
          <Col xs={6} md={4}>
          <Image src="https://us.123rf.com/450wm/grase/grase2003/grase200300089/141583982-same-color-dogs-different-breeds-play-with-ball-in-modern-grey-appartment.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
           
          </Col>
          <Col xs={6} md={4}>
          <Image src="https://us.123rf.com/450wm/synell/synell2005/synell200500029/147609920-arch-window-with-stone-wall-wall-with-window-background-surface-with-asymmetrical-stones-old-wall-of.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
            
          </Col>
        </Row>
      </Grid>
      ;
    </>
  )
}

export default galleryfront