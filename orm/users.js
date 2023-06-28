const { User, Client } = require('../core/database');

module.exports.getAllUsers = () => User.findAll({ include: Client });
module.exports.createUser = (newUser) => User.create(newUser);
