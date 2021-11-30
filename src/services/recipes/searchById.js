const { searchById } = require('../../models')('recipes');

module.exports = async (id) => {
  const recipe = await searchById(id);

  return recipe;
};