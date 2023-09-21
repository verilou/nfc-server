const { Sequelize } = require('sequelize');
console.log('connect')
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.username,
	process.env.password,
	{
		host: process.env.HOST,
		dialect: 'postgres',
		define: {
			freezeTableName: true,
		},
        ssl: true,
		dialectOptions: {
			ssl: {
                require: true,
                rejectUnauthorized: false
			},
		},
		logging: false,
	}
);

module.exports = sequelize;
