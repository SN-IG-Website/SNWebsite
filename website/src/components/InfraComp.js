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
      <Grid className="wrap">
        <Row>
          <Col xs={6} md={4}>
          <Image className="image" src="https://us.123rf.com/450wm/norrie3699/norrie36991802/norrie3699180200136/96460768-a-stack-of-coloured-houses-against-a-plain-background-.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src="https://us.123rf.com/450wm/tamara1k/tamara1k1811/tamara1k181100212/112253053-gran-canaria-october-nature-park-pajonales-freshwater-reservoir-presa-de-las-ninas-visible.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src="https://us.123rf.com/450wm/nickvorobey/nickvorobey1703/nickvorobey170300395/74656416-eurasian-jay-and-tree-sparrow-size-camparison-on-a-willow-twig.jpg?ver=6" thumbnail />
              <h3>Thumbnail label</h3>
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
      </Grid>
      ;
    </>
  );
}

export default InfraComp;
