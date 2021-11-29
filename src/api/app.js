const { json } = require('body-parser');
const express = require('express');

require('dotenv').config();

const root = require('../controllers/routes/root');
const { error } = require('../controllers/middlewares');

const app = express();

app.use(json());

app.use(root);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(error);

module.exports = app;
