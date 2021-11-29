const express = require('express');

const { wrapper } = require('../middlewares');

const {
  create,
} = require('../users');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(create));

module.exports = router;