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
      title: 'Recipe Created',
      showConfirmButton: false,
      icon: 'success',
      target: '#custom-target',
      timer: 2500,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
    setTimeout(function () {
      window.location.reload();
    }, 1500);
    const result = recipes.data.data;
    dispatch({type: 'CREATE_RECIPE', payload: result});
  } catch (err) {
    console.log(err.message);
    Swal.fire({
      title: 'Create Recipe failed',
      showConfirmButton: false,
      icon: 'error',
      target: '#custom-target',
      timer: 2500,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
  }
};

export default CreateRecipeAction;
