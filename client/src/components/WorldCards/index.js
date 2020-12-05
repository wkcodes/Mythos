import {React, useState, useEffect} from "react"
import Card from "react-bootstrap/Card"
import API from "../../utils/API";

function WorldCards(props) {

    const [author, setAuthor] = useState();

    useEffect(() => {
        API.getUser(props.userId)
        .then(res => {
            setAuthor(res.data.characterName)
        })
    })



    return (
        <>
            <Card.Body>
                <Card.Title>{author}'s Myth:</Card.Title>
                <Card.Subtitle>{props.title}</Card.Subtitle>
                <Card.Text>{props.body}</Card.Text>
            </Card.Body>
        </>

    )
}

export default WorldCards