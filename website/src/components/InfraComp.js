import React from "react";
import "./InfraComp.css";
import {Col,Row,Image } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import gym from "./images/gym.jpg";
import mess from "./images/mess.jpg";
import library from "./images/library.jpg";
import music from "./images/music.jpg";
import newcommon from "./images/newcommon.jpg";
import oldcommon from "./images/oldcommon.jpg";
import studyroom from "./images/studyroom.jpg";
import daycanteen from "./images/daycanteen.jpg";
import daycanteen2 from "./images/daycanteen2.jpg";


function InfraComp() {
  return (
    <div className="infra" id="infrasnig">
      <center>
        <h2>Infrastucture</h2>
      </center>
      <Grid className="wrap">
        <Row className="row">
          <Col xs={6} md={4}>
          <Image className="image" src={gym}/>,
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={library} />
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={mess}/>
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row className="row">
          <Col xs={6} md={4}>
          <Image className="image" src={music} />,
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={oldcommon}/>
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={newcommon} />
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
        <Row className="row">
          <Col xs={6} md={4}>
          <Image className="image" src={studyroom} />,
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={daycanteen} />
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
           
          </Col>
          <Col xs={6} md={4}>
          <Image className="image" src={daycanteen2} />
              {/* <h3>Thumbnail label</h3> */}
              {/* <p>Description</p> */}
            
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default InfraComp;
