exports.index = (req, res) => {
  const user = req.user ? req.user : null
  res.render("pages/index", {
    title: "Home",
    user: user
  }) 
}

exports.signup = (req, res) => {
  const user = req.user ? req.user : null,
    errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("pages/signup", {
    title: "Sign up",
    user: user,
    errors: errors
  }) 
}

exports.signin = (req, res) => {
  const user = req.user ? req.user : null,
    errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("pages/signin", {
    title: "Sign in",    
    user: user,
    errors: errors    
  })
}

exports.account = (req, res) => {
  const user = req.user ? req.user : null
  if (user) {
    res.render("pages/account", {
      title: "Account",    
      user: user,
    })  
  } else {
    res.redirect("/")
  }
}