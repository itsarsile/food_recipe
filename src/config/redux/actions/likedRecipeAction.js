import axios from 'axios';

export const getLikedRecipe = (idUser) => async (dispatch) => {
  try {
    const recipe = await axios.get(`https://food-recipe-be.onrender.com/recipes/liked/user/${idUser}`);
    const result = recipe.data.data;
    dispatch({type: 'GET_LIKE_RECIPE', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};
