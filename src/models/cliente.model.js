const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/db');


const cliente = database.define('cliente', {
    
    nome:{
       type:DataTypes.STRING
    },
    telefone:{
      type:DataTypes.INTEGER
    },
    email:{
      type:DataTypes.STRING
    },
    cep:{
      type:DataTypes.INTEGER
    },
    rua:{
      type:DataTypes.STRING
    },
    bairro:DataTypes.STRING
      
})

  module.exports = cliente;