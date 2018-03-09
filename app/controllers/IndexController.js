exports.index = (req, res) => {
  const errors = req.session.errors ? req.session.errors : null
  req.session.errors = []
  res.render("index", {
    user: req.user ? req.user : null,
    errors: errors
  }) 
}