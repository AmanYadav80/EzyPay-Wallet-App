const { default: mongoose } = require('mongoose');
const { Account }=require('../Models/Account');
const getAccountBalance=async(req,res)=>{
     const userId=req.userId;
     const account=await Account.findOne({
        userId,
     });
     if(!account){
        res.status(400).json({
            msg:"User not found",
        })
     }
     res.status(200).json({
        balance:account.balance,
     })
}
const transferBalance=async (req,res)=>{
   const session=await mongoose.startSession();
   session.startTransaction();
   const { amount,to }=req.body;
   const account=await Account.findOne({
    userId:res.userId
   }).session(session);
   if(!account || account.balance<amount){
    await session.abortTransaction();
    res.status(400).json({
        msg:"Insufficient Balance",
    });
   }
   const toAccount=await Account.findOne({
    userId:to
   }).session(session);
   if(!toAccount){
    await session.abortTransaction();
    res.status(400).json({
        msg:"Invalid account"
    });
   }
   //transfer 
   await Account.updateOne({ userId:req.userId },{ $inc:{ balance:-amount } }).session(session);
   await Account.updateOne({ userId:to },{ $inc: { balance:amount } }).session(session);
   await session.commitTransaction();
   res.status(200).json({
    msg:"Transfer successfull",
   });
}
module.exports={
    getAccountBalance,
    transferBalance,
}