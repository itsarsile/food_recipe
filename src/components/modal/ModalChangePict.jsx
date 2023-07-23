import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from '../../assets/image/icon_image.png';
import axios from 'axios';
import Swal from 'sweetalert2';
// import {useDispatch} from 'react-redux';
// import updateProfileAction from '../../config/redux/actions/updateProfileAction';

// const ModalChangePict = () => {
const ModalChangePict = ({id, name}) => {
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [data, setData] = useState({
    name,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [userPhoto, setUserPhoto] = useState(null);

  const handleUpload = (e) => {
    setUserPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    if (userPhoto) {
      formData.append('userPhoto', userPhoto);
    }

    axios
      .put(`https://food-recipe-be.onrender.com/users/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        setData(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Update Profile Success',
          text: 'Profile has been save',
        });
        setTimeout(function () {
          handleClose();
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Update Profile Error',
        });
      });
  };
  return (
    <>
      <p onClick={handleShow}>Change Photo Profile</p>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control className="font-weight-bold mb-3" style={{background: '#F6F5F4'}} placeholder="Username" type="title" name="name" value={data.name} onChange={handleChange} />
              <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
                <img src={Image} className="mb-2" alt="profile chage" />
                <h5 className="text-secondary">Add Photo</h5>
                <Form.Control className="p-1 font-weight-bold" type="file" size="m" name="userPhoto" value={data.userPhoto} onChange={handleUpload} />
              </Button>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" type="submit">
              Change
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalChangePict;
