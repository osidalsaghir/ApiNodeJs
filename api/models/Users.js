/* user model */
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const emailP =require('../middleware/email');
const Users = DB.define('users', {
    id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    Image: {
        type: Sequelize.STRING(200),
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING(400),
        allowNull: true,
    },
    Token: {
        type: Sequelize.TEXT,
        allowNull: true,
    }, 
    Role: {
        type: Sequelize.STRING(10),
        allowNull: true,
    },
    idLang: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
    },


}, {
    paranoid: true,
    timestamps: true,
    createAt: true,
});

Users.sync({
    force: false
});
module.exports = Users;
