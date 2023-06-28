const {
	models: { Client },
} = require('../database/sequelize');

module.exports.getAllUsers = () => Client.findAll();
module.exports.createUser = (newClient) => Client.create(newClient);
