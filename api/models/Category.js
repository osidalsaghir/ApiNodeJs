

const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Category = DB.define('categorys', {
    id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nameCategory: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    langId: {
        type: Sequelize.BIGINT(11),
        allowNull: true
    },
    Parent: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Category.sync({
    force: false
});
      module.exports = () =>Category;
