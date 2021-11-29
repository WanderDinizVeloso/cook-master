const { create } = require('../../models')('users');

module.exports = async (created) => {
  const userWithRole = {
    ...created,
    role: 'user',
  };

  const { ops } = (await create(userWithRole));

  const user = ops[0];

  return { user };
};