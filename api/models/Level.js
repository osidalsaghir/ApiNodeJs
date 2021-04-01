const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Level = DB.define('levels', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		icon: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        nameLevel: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
	}, {
		
		paranoid: true,
		timestamps: true,
    createAt: true,
	}
);

Level.sync({
    force: false
});
      module.exports = () =>Level;
