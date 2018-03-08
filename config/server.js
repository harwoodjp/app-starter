const express = require("express"),
  expressSession = require("express-session"),
  dotEnv = require("dotenv"),
  path = require("path"),
  bodyParser = require("body-parser")

dotEnv.config()

const app = express()

// app middleware
app.use(express.static(path.join(__dirname).replace("config", "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.set("views", path.join(__dirname).replace("config", "app/views"))
app.set("view engine", "ejs")

// database
const db = require("./db")
const fetchUserByUsername = async username => await db("users").where("username", "=", username)
const fetchUserById = async id => await db("users").where("id", "=", id)
const insertUser = async user => db("users").insert(user)

// passport
const bcrypt = require("bcryptjs"),
  passport = require("passport"),
  flash = require("connect-flash"),
  LocalStrategy = require("passport-local").Strategy

  passport.serializeUser(function(user, done) {
    done(null, user)
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  })
  
passport.use("local-signup", new LocalStrategy({
  usernameField: "username",
  passwordField: "password",
  passReqToCallback: true
}, (req, username, password, done) => {
  fetchUserByUsername(username)
    .then(rows => {
      if (rows.length) {
        console.log("Sorry! That username is already taken.")
        return done(null, false, req.flash("flashMessage", "Sorry! That username is already taken."))        
      } else {
        const NewUser = {
          username: username,
          email: req.body.email,
          password: bcrypt.hashSync(password, "$2a$10$wENMOiXaNvkXN9BmCbh4ZO")
        }
        insertUser(NewUser)
          .then(row => {
            NewUser.id = row[0]
            console.log(NewUser)
            return done(null, NewUser)
          })
          .catch(error => {
            console.log("Sorry! That email is already taken.")
            return done(null, false, req.flash('flashMessage', 'Sorry! That email is already taken.'))          
          })
      }
    })
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// router
require("./router")(app)


// listen
app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
