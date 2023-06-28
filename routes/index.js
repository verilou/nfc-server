const compose = require('koa-compose');
const user = require('./users');
const client = require('./clients')

const router = [user, client];

const middlewares = router.reduce((acc, cur) => {
	acc.push(cur.routes(), cur.allowedMethods());
	return acc;
}, []);

module.exports = compose(middlewares);
