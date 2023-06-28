const compose = require('koa-compose');
const userRouter = require('./users');

const router = [userRouter];

const middlewares = router.reduce((acc, cur) => {
	acc.push(cur.routes(), cur.allowedMethods());
	return acc;
}, []);

module.exports = compose(middlewares);
