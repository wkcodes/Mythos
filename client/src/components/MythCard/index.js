import React from "react"
import Card from "react-bootstrap/Card"

function MythCard(props) {

    return (
        <>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
            </Card.Body>
        </>

    )
}

export default MythCard