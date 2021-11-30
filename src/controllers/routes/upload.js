const express = require('express');

const { wrapper, auth, upload: { single } } = require('../middlewares');

const { isValidRecipeId } = require('../../services/validations');

const upload = require('../upload');

const router = express.Router({ mergeParams: true });

router.put('/:id/image',
  wrapper(isValidRecipeId),
  wrapper(auth),
  wrapper(single('file')),
  wrapper(upload));

module.exports = router;