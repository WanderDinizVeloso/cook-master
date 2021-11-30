const { StatusCodes } = require('http-status-codes');

module.exports = async (err, _req, res, _next) => {
  const { status = null, message } = err;

  if (status) {
    return res
      .status(status)
      .json({ message });
  }

  if (message === 'jwt malformed') {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'sorry, internal error' });
};