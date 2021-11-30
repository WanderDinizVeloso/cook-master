const { isRecipeFound } = require('./AuxValidations');

const { searchById } = require('../recipes');

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  if (id.length !== 24) {
    return next(isRecipeFound());
  }

  const recipe = await searchById(id);

  if (!recipe) {
    return next(isRecipeFound());
  }

  return next();
};