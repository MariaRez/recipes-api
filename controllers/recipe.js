const Recipe = require('../models/recipe');

module.exports.getRecipe = (req, res) => {
  Recipe.find({})
    .then((recipes) => res.status(200).send({ data: recipes }))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
