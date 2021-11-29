const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.UNAUTHORIZED,
  message: 'Incorrect username or password',
});