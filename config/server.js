const express = require("express"),
  session = require("express-session"),
  RedisStore = require("connect-redis")(session),
  MemoryStore = require('memorystore')(session),
  dotEnv = require("dotenv"),
  path = require("path"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  flash = require("connect-flash")  

dotEnv.config()

const app = express()

app.use("/public", express.static(path.join(__dirname).replace("config", "public")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// session
const useRedis = !!process.env.REDIS_PORT && !!process.env.REDIS_HOST
app.use(session({
  store: 
    useRedis 
      ? new RedisStore({
        host: process.env.REDIS_HOST, 
        port: process.env.REDIS_PORT
      }) 
      : new MemoryStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

// views
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
