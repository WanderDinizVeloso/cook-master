const { remove } = require('../../models')('recipes');

const userValidate = require('../utils/userValidate');

module.exports = async (id, userId) => {
  const validate = await userValidate(id, userId);

  if (!validate) {
    return null;
  }

  const removed = await remove(id);

  return removed;
};