const initialState = {
  profile: [],
  profileDetail: [],
};

const profileReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_PROFILE') {
    return state;
  } else {
    return state;
  }
};

export default profileReducer;
