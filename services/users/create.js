const bcrypt = require('bcrypt');
const { createUser } = require('../../orm/users');
const { getClientById } = require('../../orm/clients');

module.exports = async (queryInputData) => {
	const { fullName, email, clientId, password } = queryInputData;
	const client = await getClientById(clientId);
	if (fullName && email && client?.id && password) {
		const hash = await bcrypt.hash(password, 10);

		return createUser({ fullName, email, clientId, password: hash });
	}
};
