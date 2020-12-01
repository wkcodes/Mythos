import { React, useEffect, useState } from "react";
import Card from "react-bootstrap/Card"
import mergeImages from "merge-images"
import API from "../../utils/API/index"


function AvatarMaker(props) {
  
    const id = props.userID
    console.log(props)

    const [mergeImgSrc, setImgSrc] = useState("");



    useEffect(() => {

        // pass in props.userId later once you fix that issue
        API.getUser(id)
            .then(res => {
                console.log(res)
                mergeImages([res.data.img1, res.data.img2])
                
                    .then(b64 => setImgSrc(b64))
            })



    }, [id])

    return (
        <div>
            <Card.Img variant="top" src={mergeImgSrc} />
        </div>
    )
}

export default AvatarMaker;