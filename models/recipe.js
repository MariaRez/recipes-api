const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    // название рецепта
    type: String,
    required: true,
  },
  descriptionForPreview: {
    // описание рецепта на карточке
    type: String,
    required: true,
  },
  pageLink: {
    // адрес страницы для перехода
    type: String,
    required: true,
    // добавить валидацию для ссылки
  },
  image: {
    // ссылка на изображение
    type: String,
    required: true,
    // добавить валидацию для ссылки
  },
  descriptionForRecipe: {
    // описание рецепта на странице
    type: String,
    required: true,
  },
  portions: {
    type: Number,
    required: true,
  },
  nutrition: [ // нутриенты
    {
      protein: {
        type: Number,
        required: true,
      },
      fat: {
        type: Number,
        required: true,
      },
      carbohydrate: {
        type: Number,
        required: true,
      },
      alimentaryFiber: { // пищевые волокна
        type: Number,
        required: true,
      },
    },
  ],
  ingredients: [ // ингредиенты
    {
      name: {
        type: String,
        required: true,
      },
      amount: { // количество
        type: Number,
        required: true,
      },
      unit: { // единицы изменения
        type: String,
        required: true,
      },
    },
  ],
  steps: [ // инструкция по приготовлению
    {
      number: { // номер действия
        type: Number,
        required: true,
      },
      stepr: { // описание действия
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('recipe', recipeSchema);
