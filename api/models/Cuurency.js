const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Cuurency = DB.define('cuurency', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		CodeCurrency: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
        nameCurrency: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Buy: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Sell: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        symbolCurrency: {
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

Cuurency.sync({
    force: false
});
      module.exports = () =>Cuurency;
