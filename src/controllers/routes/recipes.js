const express = require('express');

const { wrapper, auth } = require('../middlewares');

const { isValidRecipeFields } = require('../../services/validations');

const {
  create,
} = require('../recipes');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(isValidRecipeFields),
  wrapper(auth),
  wrapper(create));

module.exports = router;