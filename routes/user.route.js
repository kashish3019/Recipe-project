const {Router} = require('express')
const { getsignup, getlogin, signup, login,logout } = require('../controller/user.controller')

const router = Router()
router.get('/register',getsignup)

router.get('/login',getlogin)

router.post('/register',signup)

router.post('/login',login) 

router.get("/logout",logout)

module.exports={router}