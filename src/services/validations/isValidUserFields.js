const { isRequiredField } = require('./AuxValidations');

module.exports = async (req, _res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(isRequiredField());
  }

  return next();
};