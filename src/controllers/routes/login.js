const express = require('express');

const { wrapper } = require('../middlewares');

const login = require('../login');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(login));

module.exports = router;