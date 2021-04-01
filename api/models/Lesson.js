
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Lesson = DB.define('lessons', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		Description: {
			type: Sequelize.TEXT,
			allowNull: true
		},
        Duration: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
        typeLesson: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
      
		
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Lesson.sync({
    force: false
});
      module.exports = () =>Lesson;
