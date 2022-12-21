const { application } = require("express");
const express = require ("express");
const router = express.Router();
router.use(express.json());

router.post('/inserir', function (req, res) {
    res.send('Inserir dados');
});

router.put('/editar', function (req, res) {
    res.send('Editar dados');
});

router.delete('/excluir', function (req, res) {
    res.send('Excluir dados');
});

router.get('/obter', function (req, res) {
    res.send('Obter dados');
});
   
router.post('/cadastro', function (req,res) {
    const {nome, telefone, email, cep, rua, bairro} = req.body;
    if(!nome |!telefone |!email){
        console.log("Os campos nome, telefone e e-mail são obrigatórios.");
    }else{
        console.log(nome, telefone, email, cep, rua, bairro)
    } 

});


module.exports = router;