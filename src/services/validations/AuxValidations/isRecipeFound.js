const { StatusCodes } = require('http-status-codes');

module.exports = () => ({
  status: StatusCodes.NOT_FOUND,
  message: 'recipe not found',
});