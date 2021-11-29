const { StatusCodes } = require('http-status-codes');

const { create } = require('../../services/users');

module.exports = async (req, res, _next) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  const result = await create(newUser);

  return res
    .status(StatusCodes.CREATED)
    .json(result);
};