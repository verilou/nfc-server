const { DataTypes } = require('sequelize');

const User = (sequelize) =>
	sequelize.define('user', {
		fullName: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
		clientId: { type: DataTypes.INTEGER, allowNull: false },
	});

module.exports = User;
