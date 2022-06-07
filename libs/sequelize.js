const {Sequelize} = require('sequelize');

const {config} = require('../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_HOST = encodeURIComponent(config.dbHost);
const DB_PORT = encodeURIComponent(config.dbPort);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: true,

});

setupModels(sequelize);

sequelize.sync();  //Crea la base de datos cada que se corre el servidor

module.exports = sequelize;
