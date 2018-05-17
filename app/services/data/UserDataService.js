const db = require("../../../config/db")

class UserDataService {
  static async fetchUserByUsername(username) {
    return await db("users")
      .where("username", "=", username)
  }
  static async fetchUserByEmail(email) {
    return await db("users")
      .where("email", "=", email)
  }
  static async fetchUserById(id) {
    return await db("users")
      .where("id", "=", id)
  }
  static async insertUser(user) {
    return db("users")
      .insert(user)
  }
}

module.exports = UserDataService