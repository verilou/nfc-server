const { Client, User } = require('../core/database');

module.exports.getAllClients = () => Client.findAll({ include: User });
module.exports.createClient = (newClient) => Client.create(newClient);
