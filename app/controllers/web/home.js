module.exports = (req, res) => {
  const user = req.user ? req.user : null
  res.render("pages/home", {
    title: "Home",
    user: user
  }) 
}

