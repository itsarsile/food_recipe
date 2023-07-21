import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from '../../assets/image/icon_image.png';
// import {useDispatch} from 'react-redux';
// import updateProfileAction from '../../config/redux/actions/updateProfileAction';

const ModalChangePict = () => {
  // const ModalChangePict = ({id, name}) => {
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [photo, setPhoto] = useState(null);
  // let [data, setData] = useState({
  //   name,
  // });
  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(data);
  // };

  // const handleUpload = (e) => {
  //   setPhoto(e.target.files[0]);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateProfileAction(data, id, photo, setShow));
  // };
  return (
    <>
      <p onClick={handleShow}>Change Photo Profile</p>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        {/* <form onSubmit={handleSubmit}> */}
        <Modal.Body>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control className="font-weight-bold mb-3" style={{background: '#F6F5F4'}} type="title" placeholder="Username" />
            {/* <Form.Control className="font-weight-bold mb-3" style={{background: '#F6F5F4'}} type="title" placeholder="Username"  id={id} value={data.name} onChange={handleChange}/> */}
            <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
              <img src={Image} className="mb-2" alt="profile chage" />
              <h5 className="text-secondary">Add Photo</h5>
              <Form.Control className="p-1 font-weight-bold" type="file" size="m" />
              {/* <Form.Control className="p-1 font-weight-bold" type="file" size="m" id={id} value={data.photo} onChange={handleUpload}/> */}
            </Button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning">Change</Button>
        </Modal.Footer>
        {/* </form> */}
      </Modal>
    </>
  );
};

export default ModalChangePict;
