import {React, useState} from "react"
import {Form, Button, Row, Col } from "react-bootstrap"
import API from "../../utils/API/index"

const MythCreator = () => {

    const [title, setMythTitle] = useState();
    const [body, setBody] = useState()

    const userId = sessionStorage.getItem("userId")

    function createMyth() {
        API.createMyth(userId, title, body)
        .then(res => {
            console.log("new myth", res)
        })
    }

    return(
        <>
        <Form>
            <Form.Group as={Row} controlId="formHorizontalTitle">
                <Form.Label column sm={0}>
                    Myth Title
                </Form.Label>

                <Col sm={10}>
                    <Form.Control onChange={(e) => setMythTitle(e.target.value)}
                    type="mythTitle"
                    placeholder="Myth Title"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalBody">
                <Form.Label column sm={0}>
                    Myth Body
                </Form.Label>

                <Col sm={10}>
                    <Form.Control onChange={(e) => setBody(e.target.value)}
                    type="mythBody"
                    placeholder="Myth Body"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={createMyth} type="submit">Create Myth</Button>
                </Col>
            </Form.Group>


        </Form>
        </>
    )
}

export default MythCreator