const models = require('../models/index');
const capitalizeFirstLetter = require('../utils/capitalCharFirst');
const sequelize = require('./sequelize');

const objectOfModel = {};
Object.values(models)
	.map((model) => model(sequelize))
	.forEach(
		(defineModel) =>
			(objectOfModel[capitalizeFirstLetter(defineModel.name)] =
				defineModel)
	);

module.exports = objectOfModel;
