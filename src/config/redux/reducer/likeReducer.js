const initialState = {
  like: [],
};

const likeReducer = (state = initialState, action) => {
  if (action.type === 'GET_LIKE_RECIPE') {
    return {
      ...state,
      like: action.payload,
    };
  } else {
    return state;
  }
};

export default likeReducer;
