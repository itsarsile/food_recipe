import axios from 'axios';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelRecipe({id}) {
  //   const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`https://food-recipe-be.onrender.com/recipes/${id}`)
      .then((res) => {
        alert('Delete Recipe successful');
        setTimeout(function () {
          handleClose();
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        alert('Delete Recipe failed');
      });
  };

  return (
    <>
      <Button variant="white" onClick={handleShow} className="mr-2">
        Delete Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna delete this product? This action are permanent</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="warning">
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalDelRecipe;
