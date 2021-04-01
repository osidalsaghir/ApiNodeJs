


const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const OtherSection = DB.define('otherSections', {
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
        nameSection: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Keys: {
			type: Sequelize.STRING(255),
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

OtherSection.sync({
    force: false
});
      module.exports = () =>OtherSection;
