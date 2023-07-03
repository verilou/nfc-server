const passport = require('koa-passport');
module.exports = (ctx) =>
	passport.authenticate('local', (err, user) => {
		ctx.body = { user };
	})(ctx);
