const mongoose=require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Plz add the username"],
    },
    email:{
        type:String,
        required:[true,"Plz add your email"],
        unique:[true,"Email adddress already taken"]
    },
    password:{
        type:String,
        required:[true,"Plz add user password"],
    }
},{
    timestamps:true,
}
);

module.exports = mongoose.model('User',userSchema)