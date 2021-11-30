const express = require('express');

const users = require('./users');
const login = require('./login');
const recipes = require('./recipes');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/recipes', recipes);

module.exports = root;
