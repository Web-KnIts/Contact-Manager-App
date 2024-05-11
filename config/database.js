require('dotenv').config();
const mongoose = require('mongoose')
const Dbname = "Your-Db-Name"
const URL = process.env.DATABASE_URL  ||  "mongodb://localhost:27017$"+Dbname;       // "Your Database Url of MongoDb"

const connectDb = async() =>{
    await mongoose.connect(URL).then(
        ()=>console.log("Db Connected Successfully")
    ).catch((err)=>{
        console.log("Error Caught : "+ err);
        console.log(err.message)
        console.trace(err)
        process.exit(0)
    })
}

module.exports = connectDb