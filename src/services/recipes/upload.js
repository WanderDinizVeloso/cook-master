const update = require('./update');

module.exports = async (dataRecipe) => {
  const { id, userId } = dataRecipe;

  const image = `localhost:3000/src/uploads/${id}.jpeg`;

  const newDataRecipe = {
    id,
    userId,
    image,
  };
  
  const updated = await update(newDataRecipe);

  if (!updated) {
    return null;
  }

  return updated;    
};