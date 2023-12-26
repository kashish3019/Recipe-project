const {Router} = require('express')
const { getsignup, getlogin, signup, login } = require('../controller/user.controller')

const router = Router()
router.get('/register',getsignup)

router.get('/login',getlogin)

router.post('/register',signup)

router.post('/login',login)

module.exports={router}