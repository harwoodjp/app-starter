module.exports = (req, res) => {
  const user = req.user ? req.user : null,
    errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("pages/signup", {
    title: "Sign up",
    user: user,
    errors: errors
  }) 
}
