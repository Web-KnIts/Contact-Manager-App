const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"plz add Name"]
    },
    email:{
        type:String,
        required:[true,"plz add Email"],
    },
    phone:{
        type:Number,
        required:[true,"plz add Number"]
    },
},{
    timestamps:true, 
}
)

module.exports = mongoose.model('Contact',contactSchema);