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
app.proxy = true;
app.keys = ['your-session-secret'];

app.use(
	cors({
		origin: isProd ? 'https://louiscastel.fr' : '*',
		credentials: true,
		keepHeadersOnError: true,
	})
);

app.use(
	session(
		{
			secure: isProd,
		},
		app
	)
);

app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

app.use(responseTime);
app.use(routes);

app.listen(3000);
