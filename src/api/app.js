const { json } = require('body-parser');
const express = require('express');
const path = require('path');

const root = require('../controllers/routes/root');
const { error } = require('../controllers/middlewares');

require('dotenv').config();

const app = express();

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.use(json());

app.use(root);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(error);

module.exports = app;
