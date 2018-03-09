const passport = require("passport")

const web_controller = require("../app/controllers/WebController")

module.exports = app => {
  app.get("/", web_controller.index)
  
  app.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/")
  })

  app.get("/signup", web_controller.signup)

  app.post("/signup",
    passport.authenticate("local-signup", { 
      failureRedirect: "/signup"
    }), (req, res) => {
      res.redirect("/")
    }
  )

  app.get('/signin', web_controller.signin)

  app.post('/signin',
    passport.authenticate("local-signin", {
      failureRedirect: "/signin"
    }), (req, res) => {
      res.redirect("/")
    }
  )

}