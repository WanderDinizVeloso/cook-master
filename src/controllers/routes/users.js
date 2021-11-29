const express = require('express');

const { wrapper } = require('../middlewares');

const {
  create,
} = require('../users');

const {
  isValidUserEmail,
  isValidUserFields,
} = require('../../services/validations');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(isValidUserFields),
  wrapper(isValidUserEmail),
  wrapper(create));

module.exports = router;