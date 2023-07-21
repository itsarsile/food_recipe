import axios from 'axios';
const CreateRecipeAction = (data, recipeImage, video) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('recipeImage', recipeImage);
    formData.append('name', data.title);
    formData.append('stock', data.details);
    formData.append('video', video);
    const recipes = await axios.post('https://food-recipe-be.onrender.com/recipes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(recipes);
    alert('Add Recipe successful');
    const result = recipes.data.data;
    dispatch({type: 'CREATE_RECIPE', payload: result});
  } catch (err) {
    console.log(err.message);
    alert('Add Recipe failed');
  }
};

export default CreateRecipeAction;
