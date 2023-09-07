import axios from 'axios';

export const getSavedRecipe = (idUser) => async (dispatch) => {
  try {
    const recipe = await axios.get(`https://food-recipe-be.onrender.com/recipes/saved/user/${idUser}`);
    const result = recipe.data.data;
    dispatch({type: 'GET_SAVE_RECIPE', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};
