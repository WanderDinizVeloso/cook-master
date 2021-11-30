const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  console.log(req);

  return res
    .status(StatusCodes.OK)
    .json({ id });
};