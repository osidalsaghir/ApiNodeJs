
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Questions = DB.define('questions', {
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
        Type: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        Answers: {
			type: Sequelize.TEXT,
			allowNull: true
		},
        Points: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
      
		
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Questions.sync({
    force: false
});
      module.exports = () =>Questions;
