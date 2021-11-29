const { getToken } = require('../auth');
const { searchAll } = require('../users');

module.exports = async ({ email, password }) => {
  const { users } = await searchAll();

  const { password: pass, ...userWithoutPassword } = users
    .find((user) => user.email === email && user.password === password);

  const token = getToken(userWithoutPassword);

  return { token };
};
