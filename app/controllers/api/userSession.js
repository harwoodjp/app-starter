module.exports = (req, res) => {
  if (req.user) {
    const sessionData = Object.assign({}, user)
    delete sessionData.password
    res.send(JSON.stringify(sessionData))
  } else {
    res.redirect("/")
  }
}