const { StatusCodes } = require('http-status-codes');

const login = require('../../services/login');
const { isIncorrectFields } = require('../../services/validations/AuxValidations');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const newLogin = {
    email,
    password,
  };

  const result = await login(newLogin);

  if (!result) {
    return next(isIncorrectFields());
  }

  return res
    .status(StatusCodes.OK)
    .json(result);
};