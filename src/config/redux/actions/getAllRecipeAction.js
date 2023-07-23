import axios from 'axios';

const getAllRecipeAction = () => async (dispatch) => {
  try {
    const recipes = await axios.get('https://food-recipe-be.onrender.com/recipes');
    const result = recipes.data.data;
    dispatch({type: 'GET_ALL_RECIPE', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export default getAllRecipeAction;
