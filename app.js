const { response } = require('express');
var express = require('express');
const { request } = require('http');
var app = express();

const database = require('./src/config/db');
const cliente = require('./src/models/cliente.model');

database.sync(() => console.log(`Banco de dados conectado`));

app.get('/api/inserir', function (req, res) {
    const cl=cliente.findAll();
    res.send('Inserir dados');
});

app.get('/api/editar', function (req, res) {
    res.send('Editar dados');
});

app.get('/api/excluir', function (req, res) {
    res.send('Excluir dados');
});

app.get('/api/atualizar', function (req, res) {
    res.send('Atualizar dados');
});


app.listen(3000);