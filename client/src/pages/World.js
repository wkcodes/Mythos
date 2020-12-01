import React from 'react';
import {Card, Form, Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

      
const World = () => {
          return (
          <>
          <Card className="container">
            
            <Card.Body>
              <h2 className="text-center">Sign Up</h2>
              <Form>
              <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={0}>
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
           <Button type="submit">Sign in</Button>
           </Link> 
          </Col>
        </Form.Group>
      </Form>
              </Form>
      
            </Card.Body>
          </Card>
             <div className="w-100 text-center">
               Already have an account? <Link to="/login">Log in</Link>
      
            </div>
              
          </>
        );
      }


export default World;