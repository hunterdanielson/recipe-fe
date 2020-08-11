export const fetchRecipes = () => {
  return fetch('http://localhost:7890/api/v1/recipes')
    .then(res => res.json());
};
