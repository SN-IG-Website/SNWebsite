import React from 'react';
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

function galleryfront() {
  return (
    <>
      <center>
        <h2>Photo Gallery</h2>
      </center>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <a href="gallery/label"><Image src="https://us.123rf.com/450wm/utrasto/utrasto1910/utrasto191000026/134616504-watermelon-the-size-of-an-apricot-lie-together-in-one-hand-.jpg?ver=6" thumbnail /></a>
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
        <Row>
          <Col xs={6} md={4}>
          <Image src="https://us.123rf.com/450wm/utrasto/utrasto1910/utrasto191000026/134616504-watermelon-the-size-of-an-apricot-lie-together-in-one-hand-.jpg?ver=6" thumbnail />
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