const { createUser } = require('../../orm/users');

module.exports = (queryInputData) => {
	const { fullName, email } = queryInputData;
	if (fullName && email) {
		return createUser({ fullName, email });
	}
};
