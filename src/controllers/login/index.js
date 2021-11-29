const { StatusCodes } = require('http-status-codes');

const login = require('../../services/login');

module.exports = async (req, res, _next) => {
  const { email, password } = req.body;

  const newLogin = {
    email,
    password,
  };

  const result = await login(newLogin);

  return res
    .status(StatusCodes.OK)
    .json(result);
};