const passport = require("passport")

require("./serializers/deserializeUser")(passport)
require("./serializers/serializeUser")(passport)
require("./strategies/local/signup")(passport)
require("./strategies/local/signin")(passport)