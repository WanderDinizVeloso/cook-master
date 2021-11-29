const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid entries. Try again',
});