const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(new BearerStrategy({},
    function (token, done) {
        if (1 == token) {
            return done(null, 'ok')
        } else {
            return done(null, false);
        }
    }))



module.exports.isAuthenticated = passport.authenticate('bearer', {
    session: false
});