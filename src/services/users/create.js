const { create } = require('../../models')('users');

module.exports = async (created) => {
  const { ops } = (await create(created));

  const user = {
    ...ops[0],
    role: 'user',
  };

  return { user };
};