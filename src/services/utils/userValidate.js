const searchRecipe = require('../recipes/searchById');
const searchUser = require('../users/searchById');

module.exports = async (id, userId) => {  
  const recipe = await searchRecipe(id);  
  
  const user = await searchUser(userId);

  if (!recipe || !user) {
    return null;
  }

  if (recipe.userId === userId || user.role === 'admin') {
    return { recipe, user };
  }
  
  return null;
};
