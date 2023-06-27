const { DataTypes } = require('sequelize')

const User = (sequelize) =>
	sequelize.define('User', {
		fullName: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false, unique: true },
	})

module.exports = User
