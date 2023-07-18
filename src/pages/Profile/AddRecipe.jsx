import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../../components/footer/Footer';

const AddRecipe = () => {
  return (
    <>
      <section className="container">
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AddRecipe;
