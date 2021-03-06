'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Appointments', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			physicianId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'Physicians', key: 'id' },
			},
			patientId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'Patients', key: 'id' },
			},
			appointmentDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Appointments');
	},
};
