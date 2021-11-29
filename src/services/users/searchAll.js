const { searchAll } = require('../../models')('users');

module.exports = async () => {
  const products = await searchAll();

  return { products };
};