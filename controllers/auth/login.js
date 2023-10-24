const passport = require('koa-passport');
module.exports = async (ctx) => {
	return passport.authenticate('local', (err, user) => {
		if (user === false) {
			ctx.body = 'Wrong credential';
			ctx.throw(401);
		} else {
			ctx.body = user;
			return ctx.login(user);
		}
	})(ctx);
};
