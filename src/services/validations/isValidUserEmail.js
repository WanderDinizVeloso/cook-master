const { isRequiredField, isEmailConflict } = require('./AuxValidations');
const { searchAll } = require('../users');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const { users } = await searchAll();

  const result = users.some((user) => user.email === email);

  if (!email.includes('@' && '.com')) {
    return next(isRequiredField());
  }

  if (result) {
    return next(isEmailConflict());
  }

  return next();
};