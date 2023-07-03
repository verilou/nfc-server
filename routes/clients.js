const Router = require('@koa/router');
const clientsList = require('../controllers/clients/index');
const clientsCreate = require('../controllers/clients/create');

const clients = new Router({ prefix: '/clients' });

clients.get('/', clientsList);
clients.post('/', clientsCreate);

module.exports = clients;
