const { DataTypes } = require('sequelize')

const Client = (sequelize) =>
	sequelize.define('Client', {
		name: { type: DataTypes.STRING, allowNull: false },
		userAdminId: { type: DataTypes.STRING, allowNull: false, unique: true },
	})

module.exports = Client
