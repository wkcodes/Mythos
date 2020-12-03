import React from 'react';
import {Card, Form, Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    return (
    <>
    <Card className="container">
      
      <Card.Body>
        <h2 className="text-center">Log In</h2>
        <Form>
        <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
     <Link to="/profile">
     <Button type="submit">Log in</Button>
     </Link> 
    </Col>
  </Form.Group>
</Form>
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