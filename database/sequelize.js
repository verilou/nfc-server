const { Sequelize } = require('sequelize');
const models = require('./models');
const associations = require('./associations');

const sequelize = new Sequelize('nfc-server', '', '', {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		freezeTableName: true,
	},
	logging: false,
});

models(sequelize);
associations(sequelize);
module.exports = sequelize;
