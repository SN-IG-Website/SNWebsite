import React from "react";
import "./InfraComp.css";
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


function InfraComp() {
  return (
    <>
      <center>
        <h2>Infrastucture</h2>
      </center>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          <Image src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
            
          </Col>
          <Col xs={6} md={4}>
          <Image src="https://cdn.wallpapersafari.com/90/81/6reFjl.jpg" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
           
          </Col>
          <Col xs={6} md={4}>
          <Image src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=" thumbnail />
              <h3>Thumbnail label</h3>
              <p>Description</p>
            
          </Col>
        </Row>
      </Grid>
      ;
    </>
  );
}

export default InfraComp;
