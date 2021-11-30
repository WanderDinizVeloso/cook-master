const { verifyToken } = require('../../services/auth');
const { isTokenFound, isIncorrectToken } = require('../../services/validations/AuxValidations');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(isTokenFound());
  }

  const user = verifyToken(authorization) || null;

  if (!user) {
    return next(isIncorrectToken());
  }

  req.user = user;

  return next();
};