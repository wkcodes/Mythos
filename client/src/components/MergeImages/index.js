import {React, useState, useEffect} from "react"
import mergeImages from "merge-images"
import Card from "react-bootstrap/Card"

function MergeImages(props){


    return(
      
        <Card.Img variant="top" src={props.src} />
    )
}

export default MergeImages