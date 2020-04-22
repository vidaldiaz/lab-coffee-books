const express = require('express')
const router = express.Router()

const {
  loginView,
  signupView,
  signupProcess,
  loginProcess,
  showPlaces,
} = require('../controllers/index')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/login', loginView)
router.get('/signup', signupView)
router.post('/signup', signupProcess)
router.post('/login', loginProcess)

router.get('/places', showPlaces)

module.exports = router
