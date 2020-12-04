import { React, useState, useEffect } from "react"
import API from "../../utils/API/index"
import MythCard from "../../components/MythCard/index"
import Card from "react-bootstrap/Card"

function Myths() {

    const [myths, setMyths] = useState([])

    const getProfile = () => {

        const userId = sessionStorage.getItem("userId")
        API.getProfile(userId)
            .then(res => {
                setMyths(res.data)
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            {myths.map(myth => (
            <Card key={myth.id} className="col-md-6" style={{ width: '18rem' }}>
                    <MythCard className="col-md-6"
                        title={myth.title}
                        body={myth.body}
                    />
            </Card>
                ))}
        </div>
    )

}

export default Myths