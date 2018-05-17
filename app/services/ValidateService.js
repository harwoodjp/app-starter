const validator = require("validator")

class ValidateService {
  static validateSignup(username, email, password) {
    const errors = []
    if (validator.isEmpty(username)) {
      errors.push("Username can't be empty.")
    }
    if (!validator.isEmail(email)) {
      errors.push("Email is invalid.")
    }
    if (!validator.isLength(password, { min: 6, max: 900 })) {
      errors.push("Password must be >= 6 characters.")
    }
    return errors
  }
}

module.exports = ValidateService