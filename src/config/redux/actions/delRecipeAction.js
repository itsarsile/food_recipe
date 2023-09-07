import axios from 'axios';
import Swal from 'sweetalert2';
const delRecipeAction = (id, setShow) => async (dispatch) => {
  try {
    const recipes = await axios.delete(`https://food-recipe-be.onrender.com/recipes/${id}`);
    Swal.fire({
      icon: 'success',
      title: 'Delete Recipe Success',
      text: 'Recipe has been deleted',
    });
    setTimeout(function () {
      setShow(false);
      window.location.reload();
    }, 1000);
    const result = recipes.data.data;
    dispatch({type: 'DELETE_RECIPE', payload: result});
  } catch (err) {
    console.log(err.message);
    setShow(false);
    alert('Delete Recipe failed');
  }
};

export default delRecipeAction;
