import { React, useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import MythCard from "../components/MythCard"
import API from "../utils/API/index"
const World = (props) => {

  const [allMyths, setAllMyths] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    API.getMyths()
      .then(res => {
        setAllMyths(res.data)

      })
  }, [])

  return (
    <>
      <Link className="button" style={{ justifyContent: "end"}} to="/profile">Profile</Link>
      
      <Container>

        <h1 className="label myth" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Myths of The World:</h1>

        <Row>
          {allMyths.map(myth => {
            return (
              <Col md={4} className="justify-content-between col-auto mb-3">
                <Card style={{ width: "18rem " }} key={myth.id} className="container">
                  <MythCard userId={myth.userId} title={myth.title} body={myth.body} className="col-md-6" />

                </Card>
              </Col>
            )

          })}
        </Row>
      </Container>

    </>
  );
}


export default World;