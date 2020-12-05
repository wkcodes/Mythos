import { React, useState, useEffect } from "react"
import API from "../../utils/API/index"
import MythCard from "../../components/MythCard/index"
import {Card, Container, Row, Col} from "react-bootstrap"

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
            
            <Container>
                <Row>
            {myths.map(myth => (
                    <Col md={10} className="justify-content-between col-auto mb-3">
                    <Card key={myth.id} className="col-md-6" style={{ width: '18rem' }}>
                    <MythCard
                        title={myth.title}
                        body={myth.body}
                    />
            </Card>
                    </Col>
            
            
            ))}
            </Row>
            </Container>
               
        </div>
    )

}

export default Myths