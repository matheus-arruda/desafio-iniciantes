var express = require ("express");
var router = express.Router();

router.get('/api/inserir', function (req, res) {
    const cl=cliente.findAll();
    res.send('Inserir dados');
});

router.get('/api/editar', function (req, res) {
    res.send('Editar dados');
});

router.get('/api/excluir', function (req, res) {
    res.send('Excluir dados');
});

router.get('/api/atualizar', function (req, res) {
    res.send('Atualizar dados');
});


module.exports = router;