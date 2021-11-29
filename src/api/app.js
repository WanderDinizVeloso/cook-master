const { json } = require('body-parser');
const express = require('express');

require('dotenv').config();

const app = express();

app.use(json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
