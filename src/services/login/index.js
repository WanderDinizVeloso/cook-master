const { getToken } = require('../auth');
const { searchAll } = require('../users');

module.exports = async ({ email, password }) => {
  const { users } = await searchAll();

  const result = users
    .find((user) => user.email === email && user.password === password);

  if (!result) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = result;

  const token = getToken(userWithoutPassword);

  return { token };
};
