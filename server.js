const Koa = require('koa');
const session = require('koa-session');
const cors = require('@koa/cors');
require('dotenv').config();
console.log("DEBUG 1")
const bodyParser = require('./middlewares/bodyParser');
console.log("DEBUG 2")
const passport = require('./middlewares/passport');
console.log("DEBUG 3")
const responseTime = require('./utils/responseTime');
console.log("DEBUG 4")
const routes = require('./routes');
console.log("DEBUG 5")
const app = new Koa();
console.log("DEBUG 6")
app.use(cors({ credentials: true }));
console.log("DEBUG 7")
app.keys = ['your-session-secret'];
console.log("DEBUG 8")
app.use(session({}, app));
console.log("DEBUG 9")

console.log("DEBUG 10")
app.use(bodyParser);
console.log("DEBUG 11")
app.use(passport.initialize());
console.log("DEBUG 12")
app.use(passport.session());
console.log("DEBUG 13")
app.use(responseTime);
console.log("DEBUG 14")
app.use(routes);
console.log("DEBUG 15")

app.listen(3000);
