const { DataTypes } = require('sequelize');
const Client = (sequelize) =>
	sequelize.define('client', {
		name: { type: DataTypes.STRING, allowNull: false },
	});
module.exports = Client;
