const {
	models: { User },
} = require('../database/sequelize');

module.exports.getAllUsers = () => User.findAll();
module.exports.createUser = (newUser) => User.create(newUser);
