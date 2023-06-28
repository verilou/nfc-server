const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const sequelize = require('./core/sequelize');
const connect = require('./core/connect');
const responseTime = require('./utils/responseTime');
const routes = require('./routes');
const assosiations = require('./core/associations');

connect(sequelize);
assosiations(sequelize);

const app = new Koa();
app.use(
	bodyParser({
		onError(err, ctx) {
			ctx.throw(422, 'body parse error');
		},
	})
);
app.use(responseTime);

app.use(routes);

app.listen(3000);
console.log('Server is running');
