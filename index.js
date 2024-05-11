require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const router = require('./routes/routes');
const userRouter = require('./routes/user')
const connectDb = require('./config/database');

app.use(express.json())
app.use('/api/contacts',router)
app.use('/api/users',userRouter)


app.listen(PORT,()=>{
    console.log("server listened at port : "+ PORT)
})

connectDb();