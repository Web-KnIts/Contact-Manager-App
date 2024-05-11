const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controller/userController')
const userRouter = express.Router()
const validateToken = require('../middleware/validTokenHandler');

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/current',currentUser)
userRouter.get('/current',validateToken,currentUser)

module.exports = userRouter