import {React, useState} from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from "../utils/API/index"

const Login = () => {

  const [email, setEmail] = useState();
  const [characterName, setCharacterName] = useState()

  const checkDB = (e) => {
    API.login(email, characterName)
    .then(res => {
      sessionStorage.setItem("characterName", res.data.characterName)
      sessionStorage.setItem("userId", res.data.id)
    })
  }

  return (
    <>
      <Card className="container">

        <Card.Body>
          <h2 className="text-center">Log In</h2>
          <Form>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Character Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control onChange={(e) => setCharacterName(e.target.value)} type="characterName" placeholder="Character Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Link to="/profile">
                  <Button onClick={checkDB} type="submit">Log in</Button>
                </Link>
              </Col>
            </Form.Group>
          </Form>

        </Card.Body>
      </Card>
      <div className="w-100 text-center label">
        Don't Have an account? <Link to="/signup">Sign Up here</Link>

      </div>

    </>
  );
}

export default Login;