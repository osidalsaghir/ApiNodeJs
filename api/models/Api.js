const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Api = DB.define('api', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		NameCompany: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
        Key: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
        Value: {
			type: Sequelize.TEXT,
			allowNull: true
		},		
	}, {
		timestamps: true,
		createAt: true,
		paranoid: true,
		
	}
);

Api.sync({
    force: false
});
      module.exports = () =>Api;
