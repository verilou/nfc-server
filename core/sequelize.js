const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV === 'development') {
	process.env['rds!db-f6488152-e9bc-4ff7-a4b5-aa75d124f76e'] =
		process.env['auth-db-dev'];
}

const db_auth = JSON.parse(
	process.env['rds!db-f6488152-e9bc-4ff7-a4b5-aa75d124f76e']
);
const db_info = JSON.parse(process.env['prod-db-name']);

const sequelize = new Sequelize(
	db_info.DB_NAME,
	db_auth.username,
	db_auth.password,
	{
		host: db_info.HOST,
		dialect: 'postgres',
		define: {
			freezeTableName: true,
		},
		ssl: true,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
		logging: false,
	}
);

module.exports = sequelize;
