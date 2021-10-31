let queue = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
];

console.log(queue)
require("dotenv").config()

const express = require("express")
const page = express()
const path = require("path")
const bcrypt = require('bcrypt')
const flash = require("express-flash")
const session = require("express-session")
const profiles = []
const passport = require("passport")
const initializePassport = require("./password-config")
const meth = require("method-override")
initializePassport(passport,
  login => profiles.find(user => user.login === login),
  id => profiles.find(user => user.id === id)
)

page.use(express.static("views"))
page.set("view-engine", "ejs")
page.use(express.urlencoded({ extended: false }))
page.use(flash())
page.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))
page.use(passport.initialize())
page.use(passport.session())
page.use(meth('_method'))

page.get('/', checkAuth, (req, res) => {
  res.render("index.ejs", {
    client: req.user.login.toUpperCase(),
    fila: queue
    })
});

page.get('/login', checknotAuth, (req, res) => {
  res.render("login.ejs", { test: "chocolate"})
});

page.post('/login', checknotAuth, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  badRequestMessage: 'Algum erro ocorreu.',
  failureFlash: true
}));

page.get('/register', checknotAuth, (req, res) => {
  res.render("register.ejs")
});

page.post('/register', checknotAuth, async (req, res) => {

   try {
     let ogpass = req.body.password
     let ogpass2 = req.body.password2
     if (ogpass == ogpass2) {
     let hashpass = await bcrypt.hash(req.body.password, 8)
     profiles.push({
        id: Date.now().toString(),
        login: req.body.login,
        email: req.body.email,
        password: hashpass
     })
     res.redirect('/login')
   } else {
     res.redirect('/register')
   }
   } catch {
     res.redirect('/register')
     console.log("error")
   }

   console.log(profiles)
});

page.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
});

page.post('/fila', (req, res) => {
  goiaba(req.user.login.toUpperCase(), req.body.quantity)
  res.redirect("/")
});

function goiaba(r, f) {
    if (isNaN(f)) {
     return;
    }
    if (f == "") {
     return;
    }
    let a = {
      name: r,
      amount: f,
    };
    queue.push(a)
    x = queue.length
    x -= 1
    if (queue[x].amount == 71) {
      for (let y = 0; y < queue.length; y++) {
        if (queue[y].amount % 2 == 0) {
          queue.splice(y, 1)
          y = 0
        }
      }
      if (queue[0].amount % 2 == 0) {
        queue.shift()
      }

    }

};

function checkAuth(req, res, next) {
   if (req.isAuthenticated()) return next();
   res.redirect('/login')
}

function checknotAuth(req, res, next) {
   if (!req.isAuthenticated()) return next();
   res.redirect('/')
}

page.listen(process.env.port || 3000)

setInterval(function(){
    queue.shift()
},10000);
