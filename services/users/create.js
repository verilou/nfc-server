const bcrypt = require('bcrypt');
const { createUser } = require('../../orm/users');

module.exports = async (queryInputData) => {
	const { fullName, email, clientId, password } = queryInputData;
	if (fullName && email && clientId && password) {
		const hash = await bcrypt.hash(password, 10);

		return createUser({ fullName, email, clientId, password: hash });
	}
};
