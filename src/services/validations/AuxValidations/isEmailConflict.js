const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.CONFLICT,
  message: 'Email already registered',
});