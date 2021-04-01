
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Instructor = DB.define('instructors', {
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
    Contents: {
        type: Sequelize.TEXT,
        allowNull: true,
    }, 
    Token: {
        type: Sequelize.TEXT,
        allowNull: true,
    }, 
    Statu: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    visibility: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },

	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Instructor.sync({
    force: false
});
      module.exports = () =>Instructor;
