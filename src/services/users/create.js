const { create } = require('../../models')('users');

module.exports = async (created) => {
  const userWithRole = {
    ...created,
    role: 'user',
  };

  const { ops } = (await create(userWithRole));

  const { password, ...userWithoutPassword } = ops[0];

  const user = userWithoutPassword;

  return { user };
};