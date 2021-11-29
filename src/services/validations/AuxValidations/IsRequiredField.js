const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.BAD_REQUEST,
  message: 'invalid entries. Try again',
});