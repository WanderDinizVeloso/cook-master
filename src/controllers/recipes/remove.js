const { remove } = require('../../models')('recipes');

module.exports = async (id) => {
  const removed = await remove(id);

  return removed;
};