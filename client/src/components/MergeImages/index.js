import {React, useState, useEffect} from "react"
import Card from "react-bootstrap/Card"

function MergeImages(props){


    return(
      
        <Card.Img variant="top" src={props.src} />
    )
}

export default MergeImages