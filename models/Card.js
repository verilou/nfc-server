const { DataTypes } = require('sequelize');

const Card = (sequelize) =>
	sequelize.define('card', {
		path: { type: DataTypes.UUID, allowNull: false },
	});

module.exports = Card;
