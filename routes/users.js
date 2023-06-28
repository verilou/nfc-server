const Router = require('@koa/router');
const users = new Router({ prefix: '/users' });
const usersList = require('../controllers/users/index');
const userCreate = require('../controllers/users/create');

users.get('/', usersList);
users.post('/', userCreate);
module.exports = users;
