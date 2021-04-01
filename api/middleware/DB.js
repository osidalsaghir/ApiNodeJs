/*Sequelize mysql*/
const config = require('../config/Config_DB');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: config.mysql.host,
        dialect: 'mysql'
    }
);

module.exports = sequelize;
