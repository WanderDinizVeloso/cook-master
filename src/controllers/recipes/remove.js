const { StatusCodes } = require('http-status-codes'); 

const { remove } = require('../../services/recipes');
const { isTokenFound } = require('../../services/validations/AuxValidations');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { data: { _id: userId } } = req.user;

  const recipe = await remove(id, userId);

  if (!recipe) {
    return next(isTokenFound());
  }

  return res
    .status(StatusCodes.NO_CONTENT)
    .end();
};