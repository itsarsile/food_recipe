import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from '../../assets/image/icon_image.png';
import Film from '../../assets/image/icon_film.png';
import Footer from '../../components/footer/Footer';

const AddRecipe = () => {
  return (
    <>
      <section className="container mt-5 mb-5">
        <Form.Group controlId="formFileLg" className="mb-3">
          <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
            <img src={Image} className="mb-2" />
            <h5 className="text-secondary">Add Photo</h5>
            <Form.Control className="p-1 font-weight-bold" type="file" size="m" />
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className="font-weight-bold" style={{background: '#F6F5F4'}} type="title" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control className="font-weight-bold" style={{background: '#F6F5F4'}} as="textarea" placeholder="Ingredients" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
            <img src={Film} className="mb-2" />
            <h5 className="text-secondary">Add Video</h5>
            <Form.Control className="p-1 font-weight-bold" type="file" size="m" />
          </Button>{' '}
        </Form.Group>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AddRecipe;
