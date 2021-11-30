const { verifyToken } = require('../../services/auth');
const { isIncorrectToken, isTokenFound } = require('../../services/validations/AuxValidations');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(isTokenFound());
  }

  const user = verifyToken(authorization);

  if (!user) {
    return next(isIncorrectToken());
  }

  req.user = user;

  return next();
};