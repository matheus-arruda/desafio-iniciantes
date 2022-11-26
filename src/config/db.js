const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('cliente', 'postgres', 'hegnon12',{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});
  
module.exports = sequelize;
