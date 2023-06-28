const { DataTypes } = require('sequelize');
const Client = (sequelize) =>
	sequelize.define('Client', {
		name: { type: DataTypes.STRING, allowNull: false },
	});
module.exports = Client;
