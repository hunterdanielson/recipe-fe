export const SET_RECIPES = 'SET_RECIPES';
export const setRecipes = recipes => ({
  type: SET_RECIPES,
  payload: recipes
});

export const SET_RECIPES_LOADING = 'SET_RECIPES_LOADING';
export const setRecipesLoading = () => ({
  type: SET_RECIPES_LOADING
});
