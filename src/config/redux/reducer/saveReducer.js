const initialState = {
  save: [],
};

const saveReducer = (state = initialState, action) => {
  if (action.type === 'GET_SAVE_RECIPE') {
    return {
      ...state,
      save: action.payload,
    };
  } else {
    return state;
  }
};

export default saveReducer;
