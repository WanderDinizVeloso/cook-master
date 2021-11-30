const { isRequiredField } = require('./AuxValidations');

module.exports = async (req, _res, next) => {
  const { name, ingredients, preparation } = req.body;

  if (!name || !ingredients || !preparation) {
    return next(isRequiredField());
  }

  return next();
};