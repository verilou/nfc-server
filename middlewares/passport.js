const bcrypt = require('bcrypt');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const { findUserById, findUserByEmailWithPassword } = require('../orm/users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await findUserById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

passport.use(
	new LocalStrategy(
		{ usernameField: 'email', passwordField: 'password' },
		async (email, password, done) => {
			try {
				const user = await findUserByEmailWithPassword(email);
				if (
					user &&
					email === user.email &&
					await bcrypt.compare(password, user.password)
				) {
					delete user.dataValues.password;
					done(null, user);
				} else {
					done(null, false, { message: 'User not found' });
				}
			} catch (err) {
				done(err);
			}
		}
	)
);
module.exports = passport;
