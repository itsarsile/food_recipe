import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  recipe: recipeReducer,
});

export default rootReducer;
