import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from '../Carousel/index';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



const ProfileCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <h1>Gongor</h1>
            </Card.Body>
  
  <Card.Body>
  <Carousel></Carousel>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Strength:</ListGroupItem>
    <ListGroupItem>Endurance:</ListGroupItem>
    <ListGroupItem>Speed:</ListGroupItem>
  </ListGroup>
  
</Card>
    );
}

export default ProfileCard;

        

   

