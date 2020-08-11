import React from 'react';
import { useSelector } from 'react-redux';
import { getRecipes } from '../../selectors/recipeSelectors';
import Recipe from './Recipe';

const Recipes = () => {
  const recipes = useSelector(getRecipes);
  console.log(recipes);
  const recipeElements = recipes.map(recipe => (
    <li key={recipe._id}>
      <Recipe {...recipe} />
    </li>
  ));
  return (
    <ul>
      {recipeElements}
    </ul>
  );
};

export default Recipes;
