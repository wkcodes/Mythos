import {React, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Avatar from "../Avatar"
import EditAvatar from "../EditAvatar/index"
import API from "../../utils/API/index"
import mergeImages from "merge-images"

const AvatarCard = () => {

  const onAvatarSave = (img1, img2) => {
    mergeImages([img1, img2])
            .then(b64 => setImgSrc(b64))
  }

  const [imgSrc, setImgSrc] = useState("")
  const id = sessionStorage.getItem("userId")

  useEffect(() => {

    API.getUser(id)
        .then(res => {
            if(!res.data.img1 && !res.data.img2){
               
                return
            }

            mergeImages([res.data.img1, res.data.img2])
            
                .then(b64 => setImgSrc(b64))
        })

}, [id])

  return (
    <>
    <EditAvatar onSave={onAvatarSave}></EditAvatar>
    <Card style={{ width: '18rem' }}>
      
      <Avatar  imgSrc={imgSrc}/>
      <ListGroup className="list-group-flush">
      <h1>{sessionStorage.getItem("characterName")}</h1>
        <ListGroupItem>Strength:</ListGroupItem>
        <ListGroupItem>Endurance:</ListGroupItem>
        <ListGroupItem>Speed:</ListGroupItem>
      </ListGroup>

    </Card>
    </>
  );
}

export default AvatarCard;





