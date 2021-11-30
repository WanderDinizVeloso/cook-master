const { update } = require('../../models')('recipes');

const searchById = require('./searchById');

module.exports = async (dataRecipe) => {
  const { id, userId, role, ...dataRecipeWithoutId } = dataRecipe;

  const recipe = await searchById(id);

  if (recipe.userId !== userId) {
    return null;
  }

  const newDataRecipe = {
    ...recipe,
    ...dataRecipeWithoutId,
  };

  await update(newDataRecipe);

  const modifiedRecipe = await searchById(id);

  return modifiedRecipe;
};