import { React, useState, useEffect } from "react"
import { Button, Modal, Container, Row, Col } from "react-bootstrap"
import API from "../../utils/API/index"
import Race from "../Races/index";
import Weapon from "../Weapons/index"

function EditAvatar() {
    const [btnText, setBtnText] = useState("Edit Avatar")

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [avatar, setAvatar] = useState([])

    const id = sessionStorage.getItem("userId")

    // const logRace = () => {
    //     API.updateUser(id, img1, img2)
    // }

    useEffect(()=> {
        // const id = sessionStorage.getItem("userId")
        API.getUser(id)
        .then(res => {
            if(!res.data.img1 && !res.data.img2)
            setBtnText("Create Avatar")
        })
    
    })

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>{btnText}</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Avatar Editor</Modal.Title>
                    <Modal.Body>Choose your Race:
                    <br></br>
                        <Container>
                            <Row className="justify-content-around">
                                <Col>
                                    <Button onClick={() => setImg1(Race.elf)}>Elf</Button>
                                </Col>
                                <Col>
                                    <Button onClick={() => setImg1(Race.human)}>Human</Button>
                                </Col>
                                <Col>
                                    <Button onClick={() => setImg1(Race.dwarf)}>Dwarf</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}

export default EditAvatar