const { createClient } = require('../../orm/clients');

module.exports = (queryInputData) => {
	const { name } = queryInputData;
	if (name) {
		return createClient({ name });
	}
};
