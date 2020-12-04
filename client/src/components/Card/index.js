import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Avatar from "../Avatar"
import API from "../../utils/API/index"
import EditAvatar from "../Button/index"

const avatarCard = () => {


  return (
    <>
    <EditAvatar></EditAvatar>
    <Card style={{ width: '18rem' }}>
      
      <Avatar userID={sessionStorage.getItem("userId")}/>
      <ListGroup className="list-group-flush">
      <h1>Gongor</h1>
        <ListGroupItem>Strength:</ListGroupItem>
        <ListGroupItem>Endurance:</ListGroupItem>
        <ListGroupItem>Speed:</ListGroupItem>
      </ListGroup>

    </Card>
    </>
  );
}

export default avatarCard;





