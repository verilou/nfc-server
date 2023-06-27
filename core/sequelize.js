const { Sequelize } = require('sequelize')
const models = require('./models');

const sequelize = new Sequelize('nfc-server', '', '', {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		freezeTableName: true,
	},
	logging: false,
})

models(sequelize);

module.exports = sequelize