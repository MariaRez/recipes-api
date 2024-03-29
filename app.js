const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const handlerErrors = require('./middlewares/handlerErrors');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/recipes', {
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(handlerErrors); // функция обработки ошибок

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
