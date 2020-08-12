import { SET_RECIPES, SET_RECIPES_LOADING } from '../actions/recipeActions';

export const initialState = {
  loading: false,
  recipes: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_RECIPES:
      return { ...state, loading: false, recipes: action.payload };
    case SET_RECIPES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
