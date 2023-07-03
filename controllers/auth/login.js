const passport = require('koa-passport');
module.exports = passport.authenticate('local', {
    successRedirect: '/profile',
	failureRedirect: '/',
});
