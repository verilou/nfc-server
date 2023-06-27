module.exports = async (sequelize) => {
	try {
		await sequelize.authenticate()
		console.log('Connection has been established successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}

	try {
		await sequelize.sync()
		console.log('Database has been sync successfully.')
	} catch (error) {
		console.log('Unable to sync the database:', error)
	}
}
