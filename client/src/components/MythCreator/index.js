import { React, useState } from "react"
import { Form, FormControl, InputGroup, Button, Row, Col } from "react-bootstrap"
import API from "../../utils/API/index"

const MythCreator = () => {

    const [title, setMythTitle] = useState();
    const [body, setBody] = useState()

    console.log(body)

    const userId = sessionStorage.getItem("userId")

    function createMyth() {
        API.createMyth(userId, title, body)
            .then(res => {
                console.log("new myth", res)
            })
    }

    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalTitle">
                

                    <Col sm={10}>
                        <Form.Control onChange={(e) => setMythTitle(e.target.value)}
                            type="mythTitle"
                            placeholder="Myth Title"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalBody">

                    <Col sm={10}>
                        <InputGroup>
                            <FormControl onChange={(e) => setBody(e.target.value)}  as="textarea" aria-label="With textarea" placeholder="Myth Body" />
                        </InputGroup>
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