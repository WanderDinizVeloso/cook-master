const { create } = require('../../models');

module.exports = async (recipe) => {
 const { ops } = await create(recipe);

 return ops[0];
};