const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const sequelize = require('./database/sequelize');
const connect = require('./database/connect');
const responseTime = require('./utils/responseTime');
const routes = require('./routes');

connect(sequelize);

const app = new Koa();
app.use(bodyParser());
app.use(responseTime);

app.use(routes);

app.listen(3000);
console.log('Server is running');
