
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const learningPlan = DB.define('learningPlans', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		CourseId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
      
        levelId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
      
		
	}, {
		
		paranoid: true,
		timestamps: true,
    createAt: true,
	}
);

learningPlan.sync({
    force: false
});
      module.exports = () =>learningPlan;
