exports.index = (req, res) => {
  
  if (req.user) console.log(`${req.user.username} is signed in.`)

  res.render("index", {
    user: req.user ? req.user : null
  }) 

}