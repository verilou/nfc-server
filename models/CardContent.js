const { DataTypes } = require('sequelize');
const { CARD_CONTENT_TYPE } = require('../constants');

const CardContent = (sequelize) =>
	sequelize.define('cardContent', {
		type: { type: DataTypes.ENUM(CARD_CONTENT_TYPE), allowNull: false },
		value: { type: DataTypes.TEXT, allowNull: false },
	});

module.exports = CardContent;
