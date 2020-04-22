require('dotenv').config()

const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const User = require('../models/User')

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport
