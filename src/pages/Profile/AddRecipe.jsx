import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from '../../assets/image/icon_image.png';
import Film from '../../assets/image/icon_film.png';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Style from './Profile.css';
import axios from 'axios';
// import CreateRecipeAction from '../../config/redux/actions/createRecipeAction';
// import {useDispatch} from 'react-redux';

const AddRecipe = () => {
  // const idUser = localStorage.getItem('userid');
  // const dispatch = useDispatch();
  // userid: {idUser},
  let [data, setData] = useState({
    userid: '2',
    title: '',
    details: '',
    video: 'coba.mp4',
  });

  const handleChange = (e) => {
    // e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [recipeImage, setRecipeImage] = useState(null);
  // const [video, setVideo] = useState(null);

  const handleUpload = (e) => {
    setRecipeImage(e.target.files[0]);
    // setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userid', data.userid);
    formData.append('recipeImage', recipeImage);
    formData.append('title', data.title);
    formData.append('details', data.details);
    formData.append('video', data.video);
    axios
      .post('https://food-recipe-be.onrender.com/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        alert('Add Recipe successful');
      })
      .catch((err) => {
        alert('Add Recipe failed');
      });
    // dispatch(CreateRecipeAction(data, recipeImage, video));
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
              <Form.Control className="p-1 font-weight-bold" type="file" size="m" name="recipeImage" value={data.recipeImage} onChange={handleUpload} />
            </Button>
          </Form.Group>
          <Form.Control className="font-weight-bold mb-3" id="addRecStyle" style={{background: '#F6F5F4'}} type="title" placeholder="Title" name="title" value={data.title} onChange={handleChange} />
          <Form.Control className="font-weight-bold mb-3" id="addRecStyle" style={{background: '#F6F5F4'}} as="textarea" placeholder="Ingredients" rows={3} name="details" value={data.details} onChange={handleChange} />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" id="addRecStyle">
            <Button variant="light" className="w-100 pt-5 pb-5" style={{background: '#F6F5F4'}}>
              <img src={Film} className="mb-2" alt="add video" />
              <h5 className="text-secondary">Add Video</h5>
              {/* <Form.Control className="p-1 font-weight-bold" type="file" size="m" name="video" value={data.video} onChange={handleUpload} /> */}
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
