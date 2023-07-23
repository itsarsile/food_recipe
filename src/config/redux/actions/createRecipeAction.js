import axios from 'axios';
import Swal from 'sweetalert2';
const CreateRecipeAction = (data, recipeImage, recipeVideo) => async (dispatch) => {
  try {
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
    const recipes = await axios.post('https://food-recipe-be.onrender.com/recipes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    Swal.fire({
      icon: 'success',
      title: 'Create Recipe Success',
      text: 'Recipe has been saved',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
    const result = recipes.data.data;
    dispatch({type: 'CREATE_RECIPE', payload: result});
  } catch (err) {
    console.log(err.message);
    alert('Create Recipe failed');
  }
};

export default CreateRecipeAction;
