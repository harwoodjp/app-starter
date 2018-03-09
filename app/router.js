const passport = require("passport")

const index_controller = require("../app/controllers/IndexController")

module.exports = app => {
  app.get("/", index_controller.index)
  
  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.post('/signup',
    passport.authenticate("local-signup", { 
      failureRedirect: "/"
    }), (req, res) => {
      res.redirect("/")
    }
  )

}