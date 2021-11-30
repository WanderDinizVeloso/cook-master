const { update } = require('../../models')('recipes');

const searchById = require('./searchById');

module.exports = async (dataRecipe) => {
  const { id, ...dataRecipeWithoutId } = dataRecipe;

  const recipe = await searchById(id);

  const newDataRecipe = {
    ...recipe,
    ...dataRecipeWithoutId,
  };

  await update(newDataRecipe);

  const modifiedRecipe = await searchById(id);

  return modifiedRecipe;
};