const compose = require('koa-compose');
const user = require('./users');
const client = require('./clients');
const auth = require('./auth');
const card = require('./cards');
const cardContent = require('./cardContent');

const router = [user, client, auth, card, cardContent];
const middlewares = router.reduce((acc, cur) => {
	acc.push(cur.routes(), cur.allowedMethods());
	return acc;
}, []);

console.log(middlewares.forEach(test => console.log(test.router?.stack.map(e => e.path))))

module.exports = compose(middlewares);
