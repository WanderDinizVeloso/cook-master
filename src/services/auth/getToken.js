const { sign } = require('jsonwebtoken');

const API_SECRET = require('./secret');

const JWT_CONFIG = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

module.exports = (data) => sign({ data }, API_SECRET, JWT_CONFIG);
