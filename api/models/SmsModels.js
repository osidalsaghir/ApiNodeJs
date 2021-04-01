const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const SmsModels = DB.define('smsModels', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		langId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
        nameModel: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Subject: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Contents: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Statu: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		
		
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

SmsModels.sync({
    force: false
});
      module.exports = () =>SmsModels;
