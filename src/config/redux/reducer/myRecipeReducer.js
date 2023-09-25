const initialState = {
  myRecipe: [],
};

const myRecipeReducer = (state = initialState, action) => {
  if (action.type === 'GET_MYRECIPE_RECIPE') {
    return {
      ...state,
      myRecipe: action.payload,
    };
  } else {
    return state;
  }
};

export default myRecipeReducer;
