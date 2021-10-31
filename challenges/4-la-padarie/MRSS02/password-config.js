const lclStrat = require("passport-local").Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserbyEmail, getUserbyId) {
  const authUser = async (login, password, done) => {
    const user = getUserbyEmail(login)
    if (user == null) {
      return done(null, false, "Não encontramos ninguém com esse nome de usuário!")
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user, { mesage: `bem-vindo(a), ${user}!`})
      } else {
        return done(null, false, { message: "A senha inserida está incorreta!"})
      }
    } catch (error) {
       return done(error)
    }
  }
  passport.use(new lclStrat({
    usernameField: "login" },
    authUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => { return done(null, getUserbyId(id)) })
}

module.exports = initialize
