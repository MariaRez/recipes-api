const Recipe = require('../models/recipe');

module.exports.getRecipes = (req, res, next) => { // возращает все рецепты
  Recipe.find({})
    .then((recipes) => res.status(200).send({ data: recipes }))
    .catch(next);
};
