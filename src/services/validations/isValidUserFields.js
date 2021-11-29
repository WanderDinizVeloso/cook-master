const { isRequiredField } = require('./AuxValidations');

module.exports = (req, _res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(isRequiredField());
  }

  return next();
};