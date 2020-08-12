import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../services/api';
import { setRecipes, setRecipesLoading } from '../../actions/recipeActions';
import { getRecipesLoading } from '../../selectors/recipeSelectors';
import Recipes from './Recipes';

const RecipesPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getRecipesLoading);

  useEffect(() => {
    dispatch(setRecipesLoading());
    fetchRecipes()
      .then(recipes => {
        dispatch(setRecipes(recipes));
      });
  }, []);

  if(loading) return <h1>Loading</h1>;

  return (
    <Recipes />
  );
};

export default RecipesPage;
