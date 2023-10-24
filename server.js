const Koa = require('koa');
const session = require('koa-session');
const cors = require('@koa/cors');
require('dotenv').config();

const bodyParser = require('./middlewares/bodyParser');
const passport = require('./middlewares/passport');
const responseTime = require('./utils/responseTime');
const routes = require('./routes');
const app = new Koa();
const isProd = process.env.NODE_ENV === 'production';
console.log(isProd, process.env.NODE_ENV)
app.keys = ['your-session-secret'];
app.use(
	cors({ origin: isProd ? 'https://louiscastel.fr' : '*' })
);
app.use(
	session(
		{
			secure: isProd,
		},
		app
	)
);

app.proxy = true;

app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

app.use(responseTime);
app.use(routes);

app.listen(3000);
