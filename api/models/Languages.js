const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Languages = DB.define('languages', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		codeLang: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		statu: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		
	}, {
		paranoid: true,
		
		timestamps: true,
    createAt: true,
	}
);

Languages.sync({
    force: false
});
      module.exports = () =>Languages;
