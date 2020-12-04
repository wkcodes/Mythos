import { React, useEffect, useState } from "react";
// import Card from "react-bootstrap/Card"
import mergeImages from "merge-images"
import API from "../../utils/API/index"
import MergeImages from "../MergeImages/index"


function AvatarMaker(props) {
  

    return(
        <MergeImages src={props.imgSrc}/>
        )
}

export default AvatarMaker;