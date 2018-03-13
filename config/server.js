const express = require("express"),
  expressSession = require("express-session"),
  dotEnv = require("dotenv"),
  path = require("path"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  flash = require("connect-flash")  

dotEnv.config()

const app = express()

// app middleware
app.use("/public", express.static(path.join(__dirname).replace("config", "public")))
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
app.engine("ejs", require("express-ejs-extend"))
app.set("view engine", "ejs")

// passport
require("./passport")
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// router
require("../app/router")(app)


// listen
app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
