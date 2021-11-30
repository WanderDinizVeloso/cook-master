const express = require('express');

const { wrapper, auth, upload: uploadMidd } = require('../middlewares');

const { isValidRecipeFields, isValidRecipeId } = require('../../services/validations');

const {
  create,
  remove,
  searchAll,
  searchById,
  update,
  upload,
} = require('../recipes');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(searchAll));

router.get('/:id',
  wrapper(isValidRecipeId),
  wrapper(searchById));

router.post('/',
  wrapper(isValidRecipeFields),
  wrapper(auth),
  wrapper(create));

router.put('/:id',
  wrapper(isValidRecipeId),
  wrapper(auth),
  wrapper(update));

router.put('/:id/image',
  wrapper(isValidRecipeId),
  wrapper(auth),
  wrapper(uploadMidd.single('image')),
  wrapper(upload));

router.delete('/:id',
  wrapper(isValidRecipeId),
  wrapper(auth),
  wrapper(remove));

module.exports = router;