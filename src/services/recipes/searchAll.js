const { searchAll } = require('../../models')('recipes');

module.exports = async () => {
  const recipes = await searchAll();

  return recipes;
};