// import React, { useEffect, useState } from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Vid from '../../assets/video/contoh.mp4'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

const DetailVideo = () => {
  // const { id } = useParams();
  // const [recipe, setRecipe] = useState("");
  // useEffect(() => {
  //   axios.get(`https://food-recipe-be.onrender.com/recipes/${id}`)
  //     .then((res) => {
  //       console.log(res.data.data.recipeData[0]);
  //       // setRecipe(res.data.data.userData[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [id])
  return (
    <Video autoPlay loop>
      <source src={Vid} type='video/webm' />
    </Video>
  )
}

export default DetailVideo