// Auth
const UserModel = require("models/user");
var passport = require("passport");
var passportJWT = require("passport-jwt");
const { auth: { JWT_SECRET, JWT_SESSION }  } = require("config/index");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        UserModel.findOne({ _id: payload._id })
            .populate("profileId")
            .exec(function (err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(new Error("User not found"), null);
                }
            });
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", JWT_SESSION);
        },
    };
};
