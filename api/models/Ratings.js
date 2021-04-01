
const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const Ratings = DB.define('ratings', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		instructorId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
        typeRating: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
        curseId: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
      
		
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

Ratings.sync({
    force: false
});
      module.exports = () =>Ratings;
