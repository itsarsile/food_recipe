import axios from 'axios';

export const getMyRecipe = (idUser) => async (dispatch) => {
  try {
    const recipe = await axios.get(`https://food-recipe-be.onrender.com/recipes/user/${idUser}`);
    const result = recipe.data.data;
    dispatch({type: 'GET_MYRECIPE_RECIPE', payload: result});
  } catch (error) {
    console.error(error.message);
  }
};
