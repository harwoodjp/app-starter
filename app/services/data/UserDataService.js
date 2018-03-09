const db = require("../../../config/db")

exports.fetchUserByUsername = async username => await db("users").where("username", "=", username)
exports.fetchUserByEmail = async email => await db("users").where("email", "=", email)
exports.fetchUserById = async id => await db("users").where("id", "=", id)
exports.insertUser = async user => db("users").insert(user)