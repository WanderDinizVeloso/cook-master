const { StatusCodes } = require('http-status-codes'); 

const { remove } = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const recipe = await remove(id);

  return res
    .status(StatusCodes.OK)
    .json(recipe);
};