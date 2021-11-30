const { StatusCodes } = require('http-status-codes');

const { searchById } = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const recipes = await searchById(id);

  return res
    .status(StatusCodes.OK)
    .json(recipes);
};