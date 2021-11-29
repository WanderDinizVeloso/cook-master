const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.UNAUTHORIZED,
  message: 'jwt malformed',
});