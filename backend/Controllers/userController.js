const User=require('../Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const z=require('zod');
const { Account } = require('../Models/Account');
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
            password:password,
        });
        const userId=newUser._id;
        await Account.create({
            userId,
            balance:1+Math.random()*1000,
        })
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
const updateBody=z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional(),
})
const updateUser=async (req,res)=>{
   const { success }=updateBody.safeParse(req.body);
   if(!success){
    res.status(411).json({
        msg:"Error while updating the information",
    })
    await User.updateOne(
        req.body,
        {
            _id:req.userId
        }
    )
   }
   res.status(200).json({
    msg:"User information updated successfully"
   });
}
const getUsers=async (req,res)=>{
    const filter=req.query.filter || "";
    const allUsers=await User.find(
        {
            $or:[
                {
                    'firstName':filter,
                },
                {
                    'lastName':filter,
                }
            ]
        }
    )
    res.status(200).json({
        users:allUsers.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id,
        }))
    })
}
module.exports={
    createUser,
    verifyUser,
    updateUser,
    getUsers,
};