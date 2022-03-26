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
      {/* <div class="gallery">
          <a target="_blank" href="#">
              <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="Cinque Terre" width="600" height="400" />
          </a>
          <div class="desc">Add a description of the image here</div>
      </div><div class="gallery">
              <a target="_blank" href="#">
                  <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="Forest" width="600" height="400"/>
                </a>
              <div class="desc">Add a description of the image here</div>
          </div><div class="gallery">
              <a target="_blank" href="#">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1PFEjQIOKjJrQ44iTCvr58kBRl5rNmYDMafbOFsuJOPp4JIBNEXONKIphhfzyUz8e2Q&usqp=CAU" alt="Northern Lights" width="600" height="400"/>
                  </a>
              <div class="desc">Add a description of the image here</div>
          </div><div class="gallery">
              <a target="_blank" href="#">
                  <img src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" alt="Mountains" width="600" height="400" />
              </a>
              <div class="desc">Add a description of the image here</div>
          </div> */}
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
