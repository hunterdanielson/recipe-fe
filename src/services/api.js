export const fetchRecipes = () => {
  return fetch(`${process.env.API_URL}/api/v1/recipes`)
    .then(res => res.json());
};
