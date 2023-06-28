const models = require('../models');

module.exports = (sequelize) =>
	Object.values(models).map((model) => model(sequelize));
