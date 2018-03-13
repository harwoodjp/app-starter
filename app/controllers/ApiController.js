exports.userSession = (req, res) => {
  const user = req.user ? req.user : null  
  if (user) {
    const sessionData = Object.assign({}, user)
    delete sessionData.password
    res.send(JSON.stringify(sessionData))
  } else {
    res.redirect("/")
  }
}