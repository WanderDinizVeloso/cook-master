const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.UNAUTHORIZED,
  message: 'missing auth token',
});