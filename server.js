const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('./middlewares/passport');
const responseTime = require('./utils/responseTime');
const routes = require('./routes');
const app = new Koa();

app.keys = ['your-session-secret'];
app.use(session({}, app));

app.use(
	bodyParser({
		onError(err, ctx) {
			ctx.throw(422, 'body parse error');
		},
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use(responseTime);
app.use(routes);

app.listen(3000);
