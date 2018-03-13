module.exports = passport => {
  passport.deserializeUser((user, done) => {
    done(null, user)
  })  
}