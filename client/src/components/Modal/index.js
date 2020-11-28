import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const Modals = () => {
    return (
        function MydModalWithGrid(props) {
            return (
              <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                  <Container>
                   
          
                    <Row>
                      <Col xs={6} md={4}>
                        Strength
                      </Col>

                      <Col xs={6} md={4}>
                        Endurance
                      </Col>

                      <Col xs={6} md={4}>
                        Speed
                      </Col>

                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
          }
          
          function App() {
            const [modalShow, setModalShow] = useState(false);
          
            return (
              <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Launch modal with grid
                </Button>
          
                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
              </>
            );
          }
          
          render(<App />);
    );
  }
  
  export default Modals;
  






