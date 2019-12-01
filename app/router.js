const passport = require("passport")

const web_controller = require("../app/controllers/web"),
  api_controller = require("../app/controllers/api/")

const db = require("../config/db")

module.exports = app => {
  app.get("/", web_controller.home)
  
  app.get("/signout", web_controller.signout)
  
  app.get("/signup", web_controller.signup)
  app.post("/signup",
    passport.authenticate("local/signup", { 
      failureRedirect: "/signup"
    }), (req, res) => {
      res.redirect("/")
    }
  )

  app.get('/signin', web_controller.signin)
  app.post('/signin',
    passport.authenticate("local/signin", {
      failureRedirect: "/signin"
    }), (req, res) => {
      res.redirect("/")
    }
  )

  app.get("/account", web_controller.account)
  
  app.get("/api/session", api_controller.userSession)

  app.get("/_api/:path", api_controller.dbApi)

}