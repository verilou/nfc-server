const { User, Client } = require('../models');

module.exports.getAllUsers = () =>
	User.findAll({ include: Client, ...excludePassword });
module.exports.createUser = (newUser) => User.create(newUser);
module.exports.findUserByEmailWithPassword = (email) =>
	User.findOne({ where: { email } });
module.exports.findUserById = (id) => User.findByPk(id, {include: Client, ...excludePassword});

const excludePassword = { attributes: { exclude: ['password'] } };
