const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('nfc-server', '', '', {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		freezeTableName: true,
	},
	logging: false,
});

module.exports = sequelize;