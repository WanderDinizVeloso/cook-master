const { verify } = require('jsonwebtoken');

const API_SECRET = require('./secret');

module.exports = (token) => {  
  const result = verify(token, API_SECRET);

  return result;
};
