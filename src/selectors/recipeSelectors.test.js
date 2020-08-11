import { getRecipes, getRecipesLoading } from './recipeSelectors';
describe('selectors test', () => {
  it('selects the recipes list from state', () => {
    const state = {
      loading: false,
      recipes: [
        { name: 'potatoe' },
        { name: 'tomatoe' }
      ]
    };
    const recipes = getRecipes(state);
    expect(recipes).toEqual([
      { name: 'potatoe' },
      { name: 'tomatoe' }
    ]);
  });

  it('selects the recipes list loading from state', () => {
    const state = {
      loading: false,
      recipes: [
        { name: 'potatoe' },
        { name: 'tomatoe' }
      ]
    };
    const recipesLoading = getRecipesLoading(state);
    expect(recipesLoading).toEqual(false);
  });
});
