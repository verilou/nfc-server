const Router = require('@koa/router');
const usersList = require('../controllers/users/index');
const userCreate = require('../controllers/users/create');

const users = new Router({ prefix: '/users' });

users.get('/', usersList);
users.post('/', userCreate);
module.exports = users;
