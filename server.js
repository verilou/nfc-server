const Koa = require('koa');
const session = require('koa-session');
const cors = require('@koa/cors');
// require('dotenv').config();

console.log(process.env.username, 
    typeof process.env["rds!db-f6488152-e9bc-4ff7-a4b5-aa75d124f76e"], process.env["prod-db-name"])

const bodyParser = require('./middlewares/bodyParser');
const passport = require('./middlewares/passport');
const responseTime = require('./utils/responseTime');
const routes = require('./routes');
const app = new Koa();
app.use(cors({ credentials: true }));
app.keys = ['your-session-secret'];
app.use(session({}, app));

app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());
app.use(responseTime);
app.use(routes);

app.listen(3000);
