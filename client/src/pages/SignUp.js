import { React, useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API/index"

const SignUp = () => {
  
  
  const [email, setEmail] = useState();
  const [characterName, setCharacterName] = useState();

  const setSession = () => {

    API.createUser(email, characterName)
    .then(res => {
      console.log(res.data)
      sessionStorage.setItem("userId", res.data)
      sessionStorage.setItem("charName", characterName)
    }).catch(err => console.log(err))
  }



  return (
    <>
      <Card className="container">
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={0}>
                  Email
                </Form.Label>

                <Col sm={10}>
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCharacterName">
                <Form.Label column sm={0}>
                  Character Name
                </Form.Label>

                <Col sm={10}>
                  <Form.Control onChange={(e) => setCharacterName(e.target.value)}
                    type="characterName"
                    placeholder="Character Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Link to="/profile">
                    <Button onClick={setSession} type="submit">Sign in</Button>
                  </Link>
                </Col>
              </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center label">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default SignUp;
