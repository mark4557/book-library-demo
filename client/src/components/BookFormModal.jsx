import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../services/book-service'

function BookFormModal(props) {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setInputs(values => ({ ...values, ['bookName']: '' }))
    setInputs(values => ({ ...values, ['author']: '' }))
    setShow(false);
  }

  const handleSave = () => {
    //save the values.........show progress.
    console.log('insertBook');

    service.insertBook(inputs.bookName, inputs.author, (err, result) => {
      if (err) {
        console.log(err);
        setShowAlert(true);
      } else {
        setInputs(values => ({ ...values, ['bookName']: '' }))
        setInputs(values => ({ ...values, ['author']: '' }))
        props.onUpdate();
        setShow(false);
      }
    });

  }

  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>You got an error!</Alert.Heading>
          <p>An error occurred.</p>
        </Alert>

        <Modal.Header closeButton>
          <Modal.Title>Add new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='form'>
            <Row>
              <Col>
                Use this form to add a new book to the catalogue.<br /><br />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="form-label">Book name:</label>
              </Col>
              <Col>
                <input type="text"
                  name="bookName"
                  value={inputs.bookName || ""}
                  onChange={handleChange}
                  className="input-field"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Author:</label>
              </Col>
              <Col>

                <input
                  type="text"
                  name="author"
                  value={inputs.author || ""}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookFormModal;