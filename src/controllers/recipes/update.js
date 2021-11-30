const { StatusCodes } = require('http-status-codes');

const { update } = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { id } = req.param;
  const { name, ingredients, preparation } = req.body;

  const updated = await update({
    id,
    name,
    ingredients,
    preparation,
  });

  return res
    .status(StatusCodes.OK)
    .json(updated);
};
