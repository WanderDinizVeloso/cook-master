const express = require('express');

const { wrapper, auth } = require('../middlewares');

const {
  create,
} = require('../recipes');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(auth),
  wrapper(create));

module.exports = router;