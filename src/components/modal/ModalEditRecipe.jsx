import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from '../../assets/image/icon_image.png';
import Film from '../../assets/image/icon_film.png';
import axios from 'axios';
// import {useDispatch} from 'react-redux';

function ModalEditRecipe({id, userid, title, details}) {
  //   const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [data, setData] = useState({
    userid,
    title,
    details,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [recipeImage, setRecipeImage] = useState(null);
  const [recipeVideo, setRecipeVideo] = useState(null);

  const handleUpload = (e) => {
    const fileInput = e.target;
    if (fileInput.name === 'recipeImage') {
      setRecipeImage(fileInput.files[0]);
    } else if (fileInput.name === 'recipeVideo') {
      setRecipeVideo(fileInput.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userid', data.userid);
    formData.append('title', data.title);
    formData.append('details', data.details);

    if (recipeImage) {
      formData.append('recipeImage', recipeImage);
    }

    if (recipeVideo) {
      formData.append('recipeVideo', recipeVideo);
    }

    axios
      .put(`https://food-recipe-be.onrender.com/recipes/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Edit Recipe successful');
        setData(res.data);
        setTimeout(function () {
          handleClose();
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        alert('Edit Recipe failed');
      });
  };

  return (
    <>
      <Button variant="white" onClick={handleShow} className="mr-2">
        Update Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="formFileLg" className="mb-3" id="addRecStyle">
              <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
                <img src={Image} className="mb-2" alt="add recipe" />
                <h5 className="text-secondary" id="addRecStyle" name="recipeImage">
                  Add Photo
                </h5>
                <Form.Control className="p-1 font-weight-bold" type="file" size="m" name="recipeImage" accept="image/*" onChange={handleUpload} />
              </Button>
            </Form.Group>
            <Form.Control className="font-weight-bold mb-3" id="addRecStyle" style={{background: '#F6F5F4'}} type="title" placeholder="Title" name="title" value={data.title} onChange={handleChange} />
            <Form.Control className="font-weight-bold mb-3" id="addRecStyle" style={{background: '#F6F5F4'}} as="textarea" placeholder="Ingredients" rows={3} name="details" value={data.details} onChange={handleChange} />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" id="addRecStyle">
              <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
                <img src={Film} className="mb-2" alt="add video" />
                <h5 className="text-secondary">Add Video</h5>
                <Form.Control className="p-1 font-weight-bold" type="file" size="m" name="recipeVideo" accept="video/*" onChange={handleUpload} />
              </Button>{' '}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="warning">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalEditRecipe;
