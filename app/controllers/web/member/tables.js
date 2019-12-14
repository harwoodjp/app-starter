const db = require("../../../../config/db")

module.exports = (req, res) => {
  if (req.user) {
  	db("tables")
  		.where("user_id", "=", req.user.id)
  		.then(res2 => {
  			console.log(res2)
  			res.render("pages/tables", {
  				title: "Tables",
  				user: req.user,
  				tables: res2
  			})
  		})
  } else {
    res.redirect("/")
  }
}