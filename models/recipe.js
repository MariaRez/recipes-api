const mongoose = require('mongoose');
const { imageValidateMessage, pageLinkValidateMessage, portionsValidateMessage } = require('../utils/constants');

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
    validate: {
      validator(v) {
        return /http[s]?:\/\/(?:www\.)?([\w-]+\.)+\/?\S*$/.test(v);
      },
      message: pageLinkValidateMessage,
    },
  },
  image: {
    // ссылка на изображение
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /http[s]?:\/\/(?:www\.)?([\w-]+\.)+\/?\S*$/.test(v);
      },
      message: imageValidateMessage,
    },
  },
  descriptionForRecipe: {
    // описание рецепта на странице
    type: String,
    required: true,
  },
  portions: {
    type: Number,
    required: true,
    validate: {
      validator(v) {
        return v < 13;
      },
      message: portionsValidateMessage,
    },
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
      step: { // описание действия
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('recipe', recipeSchema);
