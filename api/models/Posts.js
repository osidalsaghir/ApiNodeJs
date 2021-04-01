
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Posts = DB.define('Posts', {
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
        pageId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
        coverType: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        CoverImage: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
        CoverVideo: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
        namePost: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        seoTitle: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        seoDescription: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
        seoKeywords: {
			type: Sequelize.STRING(150),
			allowNull: true
		},
        Slug: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        visibility: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        shortContents: {
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

Posts.sync({
    force: false
});
      module.exports = () =>Posts;
