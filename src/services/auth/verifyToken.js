const { verify } = require('jsonwebtoken');

const API_SECRET = require('./secret');

module.exports = (token) => {
  const { data: user } = verify(token, API_SECRET);

  return user;
};
