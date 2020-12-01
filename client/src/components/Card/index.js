import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Avatar from "../Avatar"

const ProfileCard = (props) => {
  

  
  return (
    <Card style={{ width: '18rem' }}>
      
      <Avatar userID={1}/>
      <ListGroup className="list-group-flush">
      <h1>Gongor</h1>
        <ListGroupItem>Strength:</ListGroupItem>
        <ListGroupItem>Endurance:</ListGroupItem>
        <ListGroupItem>Speed:</ListGroupItem>
      </ListGroup>

    </Card>
  );
}

export default ProfileCard;





