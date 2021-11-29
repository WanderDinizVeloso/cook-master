const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.UNAUTHORIZED,
  message: 'All fields must be filled',
});