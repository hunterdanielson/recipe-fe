import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ name, instructions, prepTime, calories, servingSize }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Instructions</h3>
      <p>{instructions}</p>
      <h3>Prep time</h3>
      <p>{prepTime}</p>
      <h3>Calories</h3>
      <p>{calories}</p>
      <h3>Serving Size</h3>
      <p>{servingSize}</p>
    </div>
  );
};

Recipe.propTypes = {
  name: PropTypes.string.isRequired, 
  instructions: PropTypes.string, 
  prepTime: PropTypes.string, 
  calories: PropTypes.number, 
  servingSize: PropTypes.number
};

export default Recipe;
