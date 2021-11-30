const { StatusCodes } = require('http-status-codes');

const { isTokenFound } = require('../../services/validations/AuxValidations');

const { upload } = require('../../services/recipes');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { data: { _id: userId } } = req.user;

  const result = await upload({ id, userId });

  if (!result) {
    return next(isTokenFound());
  }

  return res
    .status(StatusCodes.OK)
    .json(result);
};