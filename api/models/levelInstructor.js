const Sequelize = require('sequelize');
const DB = require('../middleware/DB');

const levelInstructor = DB.define('levelInstructors', {
    id: {
        type: Sequelize.BIGINT(11),
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    idLevel: {
        type: Sequelize.BIGINT(11),
        allowNull: true
    },
	}, {
		paranoid: true,
		timestamps: true,
    createAt: true,
		
	}
);

levelInstructor.sync({
    force: false
});
      module.exports = () =>levelInstructor;
