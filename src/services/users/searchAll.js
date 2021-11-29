const { searchAll } = require('../../models')('users');

module.exports = async () => {
  const users = await searchAll();

  return { users };
};