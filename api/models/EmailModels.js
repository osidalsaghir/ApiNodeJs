const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const EmailModels = DB.define('emailModels', {
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

EmailModels.sync({
    force: false
});
      module.exports = () =>EmailModels;
