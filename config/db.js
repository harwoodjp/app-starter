const mysql = require("mysql2"),
  knex = require("knex")

module.exports = knex({
	client: 'mysql2',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE
	}
})