const bodyParser = require('koa-bodyparser');

module.exports = bodyParser({
	onError(err, ctx) {
		ctx.throw(422, 'body parse error');
	},
});
