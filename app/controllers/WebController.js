exports.index = (req, res) => {
  res.render("pages/index", {
    title: "Home",
    user: req.user ? req.user : null,
  }) 
}

exports.signup = (req, res) => {
  const errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("pages/signup", {
    title: "Sign up",
    user: req.user ? req.user : null,
    errors: errors
  }) 
}

exports.signin = (req, res) => {
  const errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("pages/signin", {
    title: "Sign in",    
    user: req.user ? req.user : null,
    errors: errors    
  })
}