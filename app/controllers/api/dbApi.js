const db = require("../../../config/db")

module.exports = (req, res) => {
  if (req.user) {
    db("api")
      .where("path", "=", req.params.path)
      .andWhere(function() {
        this.where("user_id", "=", req.user.id)
      })
      .then(res2 => {
        db.raw(res2[0].query_text)
          .then(res3 => {
            res.send(JSON.stringify(res3[0]))
          })
      })
  } else {
    res.redirect("/")
  }
}