import React from 'react';
import AvatarCard from '../components/AvatarCard/index';
import MythCreator from '../components/MythCreator/index'
import Myths from "../components/Myths/index"
import {Button, Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"


const Profile = () => {
    
  const logOut = () => {
      sessionStorage.clear()
    }

    return (
    <div>
      <Container>
        <Link to="/login" className="button" onClick={logOut}>Log Out</Link>
        <Row>
          <Col>
          <AvatarCard></AvatarCard>
          </Col>
        </Row>
        <Row>
          <Col>
          <MythCreator></MythCreator>
          </Col>
        </Row>
        <Row>
          <Col>
          <Myths></Myths>
          </Col>
        </Row>
       
        
       
        </Container>
        
    </div>
  );
}

export default Profile;