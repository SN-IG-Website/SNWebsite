import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";

function CarouselComp() {
  return (
    <div className='carousel'>
      <Carousel className='styling'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='InsideText'>
            <h1>Sarojini Naidu / Indira Gandhi </h1>
            <h2>Hall of Residence</h2>
            <h5>संस्कृता स्त्री पराशक्ति</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://wowslider.com/sliders/demo-93/data1/images/lake.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
