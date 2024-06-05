const User=require('../Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const createUser=async (req,res)=>{
      const { username, firstName, lastName, password }=req.body;
      try {
        const existingUser=await User.findOne({username});
        if(existingUser){
            res.status(411).json({
                msg:"User with given email already exists",
            })
        }
        const  newUser=await User.create({
            username:username,
            firstName:firstName,
            lastName:lastName,
        });
        var hashedPassword=await newUser.generateHash(password);
        newUser.password_hash=hashedPassword;
        await newUser.save();
        //jwt 
        const token=jwt.sign({
            userId:newUser._id,username:newUser.username
        },process.env.JWT_SECRET);
        res.status(200).json({
            msg:"User created successfully",
            token:token,
        });
      }
      catch(err){
        console.log("Error",err);
        res.status(500).json({
            msg:"Internal Server error",
        })
      }
}
const verifyUser=async(req,res)=>{
    const { username , password }=req.body;
    try {
        const existingUser=await User.findOne({username});
        if(!existingUser){
            res.status(400).json({
                msg:"User not found",
            })
        }
        else {
            if(await existingUser.validatePassword(password)){
                const token=jwt.sign({
                    userId:existingUser._id,
                    username:existingUser.username,
                },process.env.JWT_SECRET);
                res.status(200).json({
                    msg:"User logged in successfully",
                    token:token,
                })
            }
            else {
                res.status(411).json({
                    msg:"Error while logging in",
                })
            }
        }
    }
    catch(err){
        console.log("Error is Sign in Route ",err);
        res.status(500).json({
            msg:"Internal Server Error",
        });
    }
}
const updateUser=async (req,res)=>{
    const {firstName, lastName, password }=req.body;
    
}
module.exports={
    createUser,
    verifyUser,
    updateUser,
};