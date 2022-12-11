var express = require ("express");
var router = express.Router();

router.post('/api/inserir', function (req, res) {
    res.send('Inserir dados');
});

router.put('/api/editar', function (req, res) {
    res.send('Editar dados');
});

router.delete('/api/excluir', function (req, res) {
    res.send('Excluir dados');
});

router.get('/api/obter', function (req, res) {
    res.send('Obter dados');
});


module.exports = router;