const deleteUser = require('./controllers/deleteUser')
const signIn = require('./controllers/signIn')
const signupC = require('./controllers/signupC')
const update = require('./controllers/update')
const authoriztionMiddleware = require('./middlewares/authoriztionMiddleware')
const router = require('express').Router()

router.post('/signup',signupC)
router.get('/signin',signIn)
router.get('/update',authoriztionMiddleware,update)
router.delete('/deleteUser',authoriztionMiddleware,deleteUser)

module.exports = router