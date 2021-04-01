const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Permissions = DB.define('permissions', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		userId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		
		
	}, {
		
		paranoid: true,
		timestamps: true,
    createAt: true,
	}
);

Permissions.sync({
    force: false
});
      module.exports = () =>Permissions;
