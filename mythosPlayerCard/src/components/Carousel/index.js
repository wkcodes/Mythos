import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselImg = ()=> {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.comicbook.com/2020/04/final-fantasy-tactics-war-of-the-visions-orlandeau-1216757.jpeg?auto=webp&width=696&height=728&crop=696:728,smart"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/43/7e/3c/437e3c66f80d19cba8e76d631f8d556e.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.comicbook.com/2020/04/final-fantasy-tactics-war-of-the-visions-header-1216759-1280x0.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
    );
    
}

export default CarouselImg;
