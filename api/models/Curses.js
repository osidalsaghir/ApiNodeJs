
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Curses = DB.define('curses', {
    id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.BIGINT(11),
        allowNull: true
    },
    subCategoryId: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
    },
    langId: {
        type: Sequelize.BIGINT(11),
        allowNull: true
    },
    viewPoints: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    discountedPrice: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    Statu: {
        type: Sequelize.STRING(100),
        allowNull: true,
    }, 
    shortContents: {
        type: Sequelize.TEXT,
        allowNull: true,
    }, 
    Contents: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    instructorId: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
    },
    seoTitle: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    seoDescription: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    seoKeywords: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    Visibility: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },

	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Curses.sync({
    force: false
});
      module.exports = () =>Curses;
