import { React, useState, useEffect } from "react"
import { Button, Modal, Container, Row, Col } from "react-bootstrap"
import API from "../../utils/API/index"
import Race from "../Races/index";




function EditAvatar(props) {
    const [btnText, setBtnText] = useState("Create Avatar")
    const [chooseText, setChooseText] = useState("Choose your Race:")

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()

    const [isSelectingRace, setIsSelectingRace] = useState(true)

    const races = [Race.human, Race.elf, Race.dwarf]
    const [raceChoice, setRaceChoice] = useState()

    const id = sessionStorage.getItem("userId")

    const logRace = () => {
        console.log(img2)
        setChooseText("Choose your race:")
        API.updateAvatar(id, img1, img2)
            .then(res => {
                console.log(res)
                handleClose()
                props.onSave(res.data.img1, res.data.img2)
                setIsSelectingRace(true)
            })
    }

    const selectedRace = (race) => {
        setImg1(race.img1)
        setRaceChoice(race)
        setChooseText("Choose your weapon:")
        setIsSelectingRace(false)
    }

    const selectedWeapon = (weapon) => {
        console.log(weapon)
        setImg2(weapon.img)
        

    }


    useEffect(() => {
        API.getUser(sessionStorage.getItem("userId"))
            .then(res => {
                if (res.data.img1 && res.data.img2) {
                    setBtnText("Edit Avatar")
                }
            })
    }, [id])

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>{btnText}</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Avatar Editor</Modal.Title>
                    <Modal.Body>{chooseText}
                    <br></br>
                    </Modal.Body>
                    {isSelectingRace ? (
                        <Container>
                            <Row className="justify-content-around">
                                {races.map(race => {
                                    return (
                                        <Col key={race.name}>
                                            <Button onClick={() => selectedRace(race)}>{race.name}</Button>
                                        </Col>
                                    )
                                })}


                            </Row>
                        </Container>
                    )
                        :
                        (
                            <Container>
                                <Row className="justify-content-around">
                                    {raceChoice.weapons.map(weapon => {
                                        return (
                                            <Col key={weapon.name}>
                                                <Button onClick={() => selectedWeapon(weapon)}>{weapon.name}</Button>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Container>)
                    }
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={logRace}>
                        Save
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditAvatar