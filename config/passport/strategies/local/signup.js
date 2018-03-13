
const passport = require("passport"),
  bcrypt = require("bcryptjs"),
  flash = require("connect-flash"),
  LocalStrategy = require("passport-local").Strategy

const UserDataService = require("../../../../app/services/data/UserDataService"),
  ValidateService = require("../../../../app/services/ValidateService")

module.exports = passport => { 
  passport.use("local/signup", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
  }, (req, username, password, done) => {
    req.session.errors = []

    if (ValidateService.validateSignup(username, req.body.email, password).length) {
      req.session.errors = (ValidateService.validateSignup(username, req.body.email, password))
      return done(null, false, req.flash("flashMessage", "Sorry! Input validation has failed."))        
    }

    UserDataService.fetchUserByUsername(username)
      .then(rows => {
        if (rows.length) {
          req.session.errors.push("Sorry! That username is already taken.")
          return done(null, false, req.flash("flashMessage", "Sorry! That username is already taken."))        
        } else {
          const NewUser = {
            username: username,
            email: req.body.email,
            password: bcrypt.hashSync(password, "$2a$10$wENMOiXaNvkXN9BmCbh4ZO")
          }
          UserDataService.insertUser(NewUser)
            .then(row => {
              NewUser.id = row[0]
              console.log("Success! User has been signed up and logged in.")
              return done(null, NewUser)
            })
            .catch(error => {
              req.session.errors.push("Sorry! That email is already taken.")
              return done(null, false, req.flash('flashMessage', 'Sorry! That email is already taken.'))          
            })
        }
      })
  }))
}