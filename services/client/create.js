const { createClient } = require('../../orm/clients');

module.exports = (queryInputData) => {
	const { fullName, email } = queryInputData;
	if (fullName && email) {
		return createClient({ fullName, email });
	}
};
