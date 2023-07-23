import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from '../../assets/image/icon_image.png';
import Film from '../../assets/image/icon_film.png';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Style from './Profile.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddRecipe = () => {
  const idUser = localStorage.getItem('id');
  let [data, setData] = useState({
    userid: Number(idUser),
    title: '',
    details: '',
    recipeVideo: null,
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
      .post('https://food-recipe-be.onrender.com/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Update Profile Success',
          text: 'Profile has been save',
        });
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        alert('Add Recipe failed');
      });
  };

  return (
    <>
      <Navbar />
      <section className="container mt-3 mb-5" style={Style}>
        <Form onSubmit={handleSubmit}>
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
          <Button className="w-100" variant="warning" type="submit" id="addRecStyle">
            Submit Recipe
          </Button>
        </Form>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AddRecipe;
