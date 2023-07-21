import axios from 'axios';
const CreateProductAction = (data, photo, video) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('name', data.title);
    formData.append('stock', data.details);
    formData.append('video', video);
    const recipes = await axios.post('https://foodrecipebe.cyclic.app/recipes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(recipes);
    alert('Add Recipe successful');
    const result = recipes.data.data;
    dispatch({type: 'CREATE_RECIPE', payload: result});
  } catch (err) {
    console.error(err.message);
    alert('Add Recipe failed');
  }
};

export default CreateProductAction;
