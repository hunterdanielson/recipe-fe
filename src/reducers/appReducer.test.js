import reducer from './appReducer';
import { setRecipes, setRecipesLoading } from '../actions/recipeActions';

describe('app reducer test', () => {
  it('handles the set recipe action', () => {
    const state = { 
      loading: true,
      recipes: []
    };
    const action = setRecipes([
      { name: 'potatoe' },
      { name: 'tomatoe' }
    ]);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      recipes: [
        { name: 'potatoe' },
        { name: 'tomatoe' }
      ]
    });
  });

  it('handles the set recipe loading action', () => {
    const state = { 
      loading: false,
      recipes: []
    };
    const action = setRecipesLoading();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      recipes:[]
    });
  });
});
