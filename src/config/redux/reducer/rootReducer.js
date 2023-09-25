import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer';
import profileReducer from './profileReducer';
import myRecipeReducer from './myRecipeReducer';
import likeReducer from './likeReducer';
import saveReducer from './saveReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  recipe: recipeReducer,
  myRecipe: myRecipeReducer,
  like: likeReducer,
  save: saveReducer,
});

export default rootReducer;
