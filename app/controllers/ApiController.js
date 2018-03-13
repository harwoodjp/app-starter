exports.userSession = (req, res) => {
  res.send(JSON.stringify(req.user))
}