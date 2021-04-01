const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Pages = DB.define('pages', {
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
        Cover: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        namePage: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        seoTitle: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        seoDescription: {
			type: Sequelize.STRING(500),
			allowNull: true
		},
        seoKeywords: {
			type: Sequelize.STRING(500),
			allowNull: true
		},
        Slug: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Keys: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Statu: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Type: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        visibility: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		
		
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
		
	}
);

Pages.sync({
    force: false
});
      module.exports = () =>Pages;
