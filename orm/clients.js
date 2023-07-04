const { Client, User } = require('../models');

module.exports.getAllClients = () => Client.findAll({ include: User });
module.exports.getClientById = (id) => Client.findByPk(id);
module.exports.createClient = (newClient) => Client.create(newClient);
