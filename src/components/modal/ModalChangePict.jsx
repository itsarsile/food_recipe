import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from '../../assets/image/icon_image.png';

const ModalChangePict = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow}>Change Photo Profile</p>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
              <img src={Image} className="mb-2" />
              <h5 className="text-secondary">Add Photo</h5>
              <Form.Control className="p-1 font-weight-bold" type="file" size="m" />
            </Button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning">Change</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChangePict;
