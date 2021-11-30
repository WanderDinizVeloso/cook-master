const { isFilledFields } = require('./AuxValidations');

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    return next(isFilledFields());
  }

  return next();
};