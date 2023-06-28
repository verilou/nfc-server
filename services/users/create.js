const { createUser } = require('../../orm/users');

module.exports = (queryInputData) => {
	const { fullName, email, clientId } = queryInputData;
	if (fullName && email && clientId) {
		return createUser({ fullName, email, clientId });
	}
};
