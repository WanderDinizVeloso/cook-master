const { create } = require('../../models')('recipes');

module.exports = async (dataRecipe) => {
 const { ops } = await create(dataRecipe);

 const recipe = ops[0];

 return { recipe };
};