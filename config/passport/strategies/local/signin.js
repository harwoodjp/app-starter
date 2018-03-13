const passport = require("passport"),
  bcrypt = require("bcryptjs"),
  flash = require("connect-flash"),
  LocalStrategy = require("passport-local").Strategy

const UserDataService = require("../../../../app/services/data/UserDataService")

module.exports = passport => { 
  passport.use("local/signin", new LocalStrategy({
    usernameField : "username",
    passwordField : "password",
    passReqToCallback : true
  }, (req, username, password, done) => {
    req.session.errors = []    
    UserDataService.fetchUserByUsername(username)
      .then(rows => {
        if (!rows.length) {
          req.session.errors.push("Sorry! Your login details are invalid.")          
          return done(null, false, req.flash('flashMessage', 'Sorry! Your login details are invalid.'));
        }
        if (bcrypt.hashSync(password, "$2a$10$wENMOiXaNvkXN9BmCbh4ZO") !== rows[0].password) {
          req.session.errors.push("Sorry! Your login details are invalid.")          
          return done(null, false, req.flash('flashMessage', 'Sorry! Your login details are invalid.'));
        }
        return done(null, rows[0]);
      })
  }))
}