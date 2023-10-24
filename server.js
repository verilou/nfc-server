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
console.log(
	isProd,
	process.env.NODE_ENV,
	isProd ? 'https://louiscastel.fr' : '*'
);
app.keys = ['your-session-secret'];

app.use(
	cors({
		origin: (ctx) => {
			const validDomains = [
				'https://api.louiscastel.fr',
				'http://localhost:3001',
			];
			console.log(ctx.request.header.origin);
			if (validDomains.indexOf(ctx.request.header.origin) !== -1) {
				return ctx.request.header.origin;
			}
			return validDomains[0]; // we can't return void, so let's return one of the valid domains
		},
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
