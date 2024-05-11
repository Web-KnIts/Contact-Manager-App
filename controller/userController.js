require('dotenv').config();
const User = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.registerUser = async(req,res)=>{
    try{
        const {username,email,password} = req.body
        if(!username || !email || !password)
        {
            return res.status(400).json({
                message: "Some required fields are missing"
            }) 
        }
        // check for existing user 
        const isAvailable = await User.findOne({email})
        if(isAvailable)
        {
            return res.status(400).json({
                message: "User Exists, Already registered from this email"
            }) 
        }
        // create Hash Pass :
        const hashPass = await bcrypt.hash(password,10);
        // create new user
        const createUser = await User.create({
            username,email,password:hashPass
        });
        res.status(200).json({
            success:true,
            registered:
            {
                id:createUser._id,
                username:createUser.username,
                email:createUser.email
            },
            message:"New User Added into Database !"
        })
        
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error , cannot register user",
            error: err.message
        });         
    }
}

exports.loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({
                message: "Some required fields are missing"
            }) 
        }
        // check whether user Exists or Not
        const isAvailable = await User.findOne({email});
        // providing access token in response if matched
        const accessToken = jwt.sign({
            user:{
                username:isAvailable.username,
                email:isAvailable.email,
                id:isAvailable._id
            },
        },process.env.ACCESS_TOKEN,
        {expiresIn:"1m"})
        if(isAvailable && (await bcrypt.compare(password,isAvailable.password)))
        {
           return  res.status(200).json({
                success:true,
                accessToken:accessToken,
                message:"Logged In"
            })
        }
        else
        {
          return  res.status(404).json({
            success:false,
            message:"user not found with the given credentials"
          })
        }
    }
    catch(err)
    {
     res.status(500).json({
        success:false,
        message:err.message,
     })
    }
}

exports.currentUser = async(req,res)=>{
    try{
        res.json({
            message:"current user",
            user:req.user
        })
    }
    catch(err)
    {
    
    }
}

