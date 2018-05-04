module.exports = (req, res) => {
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