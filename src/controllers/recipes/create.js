const { StatusCodes } = require('http-status-codes');

const { create } = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { name, ingredients, preparation } = req.body;
  const { data: { _id: userId } } = req.user;

  console.log(req.user);

  const newRecipe = {
    name,
    ingredients,
    preparation,
    userId,
  };

  const result = await create(newRecipe);

  return res
    .status(StatusCodes.CREATED)
    .json(result);
};