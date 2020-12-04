import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Avatar from "../Avatar"
import API from "../../utils/API/index"
import EditAvatar from "../Button/index"

const avatarCard = (props) => {
  // const id = 1
  // API.getUser(id)
  // .then(res =>{
  //   console.log("user", res)
  // })

  return (
    <>
    <EditAvatar></EditAvatar>
    <Card style={{ width: '18rem' }}>
      
      {/* change userId to pull from props from Profile or SignUp page */}
      <Avatar userID={1}/>
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





