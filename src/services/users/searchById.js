const { searchById } = require('../../models')('users');

module.exports = async (id) => {
  const recipe = await searchById(id);

  return recipe;
};