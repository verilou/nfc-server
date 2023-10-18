const Router = require('@koa/router');
const login = require('../controllers/auth/login');
const profile = require('../controllers/auth/profile');
const authRoute = require('../middlewares/authRoute');
const auth = new Router();

auth.post('/login', login);
auth.post('/profile', authRoute, profile).get('/profile', authRoute, profile);

module.exports = auth;
