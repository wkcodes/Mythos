import React  from "react";
// import Card from "react-bootstrap/Card"
import MergeImages from "../MergeImages/index"


function AvatarMaker(props) {
  

    return(
        <MergeImages src={props.imgSrc}/>
        )
}

export default AvatarMaker;