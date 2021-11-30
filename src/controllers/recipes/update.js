const { StatusCodes } = require('http-status-codes');

const { update } = require('../../services/recipes');
const { isTokenFound } = require('../../services/validations/AuxValidations');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const { data: { _id: userId, role } } = req.user;

  const updated = await update({
    id,
    name,
    ingredients,
    preparation,
    userId,
    role, 
  });

  if (!updated) {
    return next(isTokenFound());
  }

  return res
    .status(StatusCodes.OK)
    .json(updated);
};
