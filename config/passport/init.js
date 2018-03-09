const passport = require("passport")

require("./deserializeUser")(passport)
require("./serializeUser")(passport)
require("./local-signup")(passport)
require("./local-signin")(passport)