const { Sequelize } = require('sequelize');
console.log(process.env["rds!db-f6488152-e9bc-4ff7-a4b5-aa75d124f76e"])
const sequelize = "ok"
// const sequelize = new Sequelize(
// 	'nfc-server',
// 	'postgres',
// 	'',
// 	{
// 		host: 'database-nfc-server.ckrnrijfeogt.eu-west-1.rds.amazonaws.com',
// 		dialect: 'postgres',
// 		define: {
// 			freezeTableName: true,
// 		},
//         ssl: true,
// 		dialectOptions: {
// 			ssl: {
//                 require: true,
//                 rejectUnauthorized: false // <<<<<<< YOU NEED THIS
// 			},
// 		},
// 		logging: false,
// 	}
// );

module.exports = sequelize;
