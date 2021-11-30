const express = require('express');

const { wrapper, auth } = require('../middlewares');

const { isValidRecipeFields } = require('../../services/validations');

const {
  create,
  remove,
  searchAll,
  searchById,
  update,
} = require('../recipes');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(searchAll));

router.get('/:id',
  wrapper(searchById));

router.post('/',
  wrapper(isValidRecipeFields),
  wrapper(auth),
  wrapper(create));

router.put('/:id',
  wrapper(update));

router.delete('/:id',
  wrapper(remove));

module.exports = router;