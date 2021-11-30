const express = require('express');

const { wrapper } = require('../middlewares');

const login = require('../login');

const { isValidLoginFields } = require('../../services/validations');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(isValidLoginFields),
  wrapper(login));

module.exports = router;