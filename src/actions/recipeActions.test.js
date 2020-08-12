import { SET_RECIPES, SET_RECIPES_LOADING, setRecipes, setRecipesLoading } from './recipeActions';

describe('recipe actions', () => {
  it('creates a set recipe action', () => {
    const action = setRecipes([
      { name: 'potatoe' },
      { name: 'hot dog' }
    ]);

    expect(action).toEqual({
      type: SET_RECIPES,
      payload: [
        { name: 'potatoe' },
        { name: 'hot dog' }
      ]
    });
  });

  it('creates a set recipe loading action', () => {
    const action = setRecipesLoading();

    expect(action).toEqual({
      type: SET_RECIPES_LOADING
    });
  });
});
