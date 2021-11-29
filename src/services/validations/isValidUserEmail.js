const { isRequiredField } = require('./AuxValidations');

module.exports = (req, _res, next) => {
  const { email } = req.body;

  if (!email.includes('@' && '.com')) {
    return next(isRequiredField());
  }

  return next();
};