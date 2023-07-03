const Router = require('@koa/router');
const login = require('../controllers/auth/login');
const profile = require('../controllers/auth/profile');
const auth = new Router();

auth.post('/login', login);
auth.get('/profile', profile);
module.exports = auth;
