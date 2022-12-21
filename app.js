const { response } = require('express');
var express = require('express');
const { request } = require('http');
var app = express();

const database = require('./src/config/db');
const cliente = require('./src/models/cliente.model');
const clienteRoute = require('./src/routes/cliente.route.js');

database.sync(() => console.log(`Banco de dados conectado`));

app.use('/api',clienteRoute);

app.listen(3000);