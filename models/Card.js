const { DataTypes } = require('sequelize');

const Card = (sequelize) =>
	sequelize.define('card', {
		path: { type: DataTypes.UUID, allowNull: false },
		client: { type: DataTypes.STRING, allowNull: false, unique: true },
		content: { type: DataTypes.STRING, allowNull: true, default: null },
	});

module.exports = Card;
