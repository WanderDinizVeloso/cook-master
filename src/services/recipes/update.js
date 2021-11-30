const { update } = require('../../models')('recipes');

const searchById = require('./searchById');
const userValidate = require('../utils/userValidate');

module.exports = async (dataRecipe) => {
  const { id, userId, ...dataRecipeWithoutId } = dataRecipe;

  const validate = await userValidate(id, userId);

  if (!validate) {
    return null;
  }

  const newDataRecipe = {
    ...validate.recipe,
    ...dataRecipeWithoutId,
  };
  
  await update(newDataRecipe);

  const modifiedRecipe = await searchById(id);

  return modifiedRecipe;    
};