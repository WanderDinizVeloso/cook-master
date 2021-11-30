const { StatusCodes } = require('http-status-codes');

const { searchAll } = require('../../services/recipes');

module.exports = async (_req, res, _next) => {
  const recipes = await searchAll();

  return res
    .status(StatusCodes.OK)
    .json(recipes);
};