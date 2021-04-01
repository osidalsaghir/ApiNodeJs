
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Section = DB.define('sections', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		courseId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
        nameSection: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Description: {
			type: Sequelize.TEXT,
			allowNull: true
		},
      
		
	}, {
		
		paranoid: true,
		timestamps: true,
    createAt: true,
	}
);

Section.sync({
    force: false
});
      module.exports = () =>Section;
