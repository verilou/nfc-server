const Router = require('@koa/router');
const login = require('../controllers/auth/login');

const auth = new Router();

auth.post('/login', login);
module.exports = auth;
