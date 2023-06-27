const Koa = require('koa')
const app = new Koa()

const sequelize = require('./core/sequelize')
const database = require('./core/database')

database(sequelize)

app.use((ctx) => {
	ctx.body = 'Hello Koa'
})

app.listen(3000)
console.log('Server is running')
